
import { useState } from 'react';
import PropTypes from 'prop-types';
const TableComponent = (props) => {
	const { data } = props;
	const columns = (data.length > 0 ? Object.keys(data[0]) : []); 
	const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const arrData = data.filter((item) =>
    Object.values(item).some((value) => {
      if (value !== null && value !== undefined) {
        return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
      }
      return false;
    })
  );

  return (
		<div className="w-full  container mx-auto">
		<input className="w-full  container border rounded p-2 mb-3" type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
    <table className="min-w-full rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
      <thead>
				<tr className="bg-blue-300">
					{columns.map((columnName, index) => (
            <th key={index} className="border px-4 py-2">{columnName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
				{arrData.map((item, index) => (
          <tr key={index}>
           {
            columns.map((value, i) => (
              <td className="border p-1" key={i}>{item[value]}</td>
            ))
          }
          </tr>
          // <tr key={index}>
          //   <td className="border p-1 text-center">{item.id}</td>
          //   <td className="border p-1">{item.Code}</td>
          //   <td className="border p-1">{item.TitleName}</td>
					// 	<td className="border p-1">{item.Name}</td>
					// 	<td className="border p-1">{item.LastName}</td>
					// 	<td className="border p-1">{item.NickName}</td>
					// 	<td className="border p-1">{item.EmpJob}</td>
					// 	<td className="border p-1">{item.StartDate}</td>
          //   <td className="border p-1">{item.EmpJob}</td>
          // </tr>
        ))}
      </tbody>
    </table>
		</div>
  );
};

TableComponent.propTypes = {
  data: PropTypes.array
};
export default TableComponent;
