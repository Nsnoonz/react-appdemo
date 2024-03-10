import { useState } from 'react';
import Swal from 'sweetalert2';
import '../assets/css/form.css'

function Form() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fnLogin(username,password);
    if ('accessToken' in response) {
			Swal.fire({
				title: 'Success',
				icon: "success",
				timer: 2000
			}).then(function() {
				localStorage.setItem('accessToken', response['accessToken']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        window.location.href = "/index";
			})
    } else {
			Swal.fire({ icon: "error",title: "Oops...",text: "Something went wrong!" });
    }
  }

	async function fnLogin(username,password) {
		console.log(username,password)
		return {}//{accessToken: '1', user: 'test'}
		// return fetch('https://www.mecallapi.com/api/login', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({username,password})
		// })
		// 	.then(data => data.json())
	}
	
  return (
    <>
		<div className=" flex flex-col h-screen justify-center items-center">
		<form onSubmit={handleSubmit} className="max-w-xl mx-auto rounded-lg bg-blue-100">
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
			<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
		</form>
		</div>
    </>
  )
}

export default Form