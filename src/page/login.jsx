import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import '../assets/css/login.css'
import axios from 'axios';

function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

	useEffect(() => {
		localStorage.clear()
	}, []); 

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fnApiLogin(username,password);
    if (response.err) {
			Swal.fire({ icon: "error",title: "Error",text: "Something went wrong!" });
    } else {
			if(response.result.data.code === 200){
				const res = await fnApiGetUserInfo(response.result.data);
				if (res.result.statuscode === 200) {
					const result = res.result.data[0]
					localStorage.setItem('usercode', response.result.data.usercode);
					localStorage.setItem('username', response.result.data.username);
					localStorage.setItem('fullname',result.name + ' ' + result.lastname);
					localStorage.setItem('accesstoken', response.result.data.accesstoken);
					Swal.fire({
						title: 'Success',
						icon: "success",
						timer: 1000
					}).then(function() {
						window.location.href = "/index";
					})
				}
			
			}else{
				Swal.fire({ icon: "error",title: "Error",text:  response.result.data.alert });
			}
			
    }
  }

	async function fnApiLogin(username,password) {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				}
			}
			const data = {username, password, systemid:'90'}
			const response = await axios.post('http://192.168.3.251:4100/api/mypass/v1.0/fnGetCheckUserLogin', data, config);
			return (response.data)
		} catch (error) {
			return {'err': error.message}
		}
	}

	async function fnApiGetUserInfo(req) {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				}
			}
			const data = { usercode: req.usercode, usertoken: req.accesstokenuser, type: "mainmenu", systemid:'90' }
			const response = await axios.post('http://192.168.3.251:4100/api/mytoken/v1.0/fnGetDataUserprofile', data, config);
			return (response.data)
		} catch (error) {
			return {'err': error.message}
		}
	}
	
  return (
    <>
		<div className="bg-login">
		<div className=" flex flex-col h-screen justify-center items-center">
		<img className="mb-5" src="https://www.silkspan.com/wp-content/themes/silkspan/assets/images/logo.svg" alt="" />
		<form onSubmit={handleSubmit} className="w-full max-w-80 mx-auto rounded-lg bg-blue-100">
			<div className="mb-5">
				<label htmlFor="txtUsername" className="block mb-2 text-sm font-medium text-gray-900">Usercode</label>
				<input type="text" id="txtUsername" onChange={e => setUserName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
			</div>
			<div className="mb-5">
				<label htmlFor="txtPassword" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
				<input type="password" id="txtPassword" onChange={e => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
			</div>
			<div className="flex items-start mb-5">
				<a className="cursor-pointer ms-2 text-sm font-medium text-blue-700">Forgotpassword ?</a>
			</div>
			<button type="submit" className=" font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
		</form>
		</div>
		</div>
    </>
  )
}

export default Login