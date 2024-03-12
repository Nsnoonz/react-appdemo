
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
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
		<div className="w-full container mx-auto">
		<input className="w-full container border rounded p-2 mb-3" type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
    <table className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
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
            <td className="border p-1 text-center">{item.id}</td>
            <td className="border p-1">{item.name}</td>
            <td className="border p-1">{item.username}</td>
						<td className="border p-1">-</td>
						<td className="border p-1">{item.email}</td>
						<td className="border p-1">{item.phone}</td>
						<td className="border p-1">{item.website}</td>
						<td className="border p-1">-</td>
          </tr>
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
