import React from 'react';

const TableRow = ({ user, index, handleDeleteBtn }) => {
    const { _id, name, email, number, hobby } = user;
    return (

        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{number}</td>
            <td>{email}</td>
            <td>{hobby}</td>
            <td>
                <button className="btn btn-outline btn-info btn-xs mr-2">Update</button>
                <button onClick={() => handleDeleteBtn(_id)} className="btn btn-outline btn-error btn-xs">delete</button>
            </td>
        </tr>

    );
};

export default TableRow;