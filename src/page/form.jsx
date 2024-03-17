import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Nav from '../components/nav'
import TableComponent from '../components/table';
import '../assets/css/form.css'

function Form() {
  const [arrdata, setArrData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        const response = await fnCallApi();
        if (response.err) {
          Swal.fire({ icon: "error",title: "Oops...",text: "Something went wrong!" });
        } else {
          setArrData(response.result.data);
        }
    };
    fetchData();
  }, []);

  async function fnCallApi() {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				}
			}
			const data = {}
			const response = await axios.post('http://192.168.110.18:4100/api/hr/v1.0/fnDemo', data, config);
			return (response.data)
		} catch (error) {
			return {'err': error.message}
		}
	}

  return (
    <>
    <Nav />
    <div className='pt-5'>

      <TableComponent data={arrdata}/>
    </div>
    </>
  )
}

export default Form