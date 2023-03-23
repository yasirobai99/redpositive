import React, { useEffect, useState } from 'react';
import Form from './Form';
import TableRow from './TableRow';
import { toast } from 'react-toastify';

const Table = ({ users, setUsers, handleDeleteBtn }) => {
    const [sortType, setSortType] = useState('');

    //Sort Products By price
    useEffect(() => {
        if (sortType === 'aToz') {
            const pro = users.sort((a, b) => b.name.localeCompare(a.name));
            setUsers(pro);
        } else if (sortType === 'zToa') {
            const pro = users.sort((a, b) => a.name.localeCompare(b.name));
            setUsers(pro);
        }
    }, [users, setUsers, sortType]);


    //Handle Form Data Entry

    const handleFormData = (data) => {
        //Data Send to Server
        const url = 'localhost:5000/users';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                const newEntry = [...users, result];
                setUsers(newEntry);
                toast.success("Saved SuccessFully!")
            })
    };


    return (
        <div className='mt-24 px-16 mx-auto'>
            <div className='mb-3 flex justify-between items-center'>
                <div >
                    <label htmlFor="pop-up-form" className="btn btn-outline btn-info modal-button mr-3">Add New Entry</label>

                    <button className="btn btn-outline btn-info">Send</button>
                </div>
                <div>
                    <select className="select w-full select-info max-w-xs" onChange={(e) => setSortType(e.target.value)}>
                        <option disabled selected>sort by</option>
                        <option value={"aToz"}>A to Z</option>
                        <option value={"zToa"}>Z to A</option>
                    </select>
                </div>
            </div>

            <div>
                <Form onFormData={handleFormData}></Form>
            </div>

            {/* Table */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead >
                        <tr >
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Hobby</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    {
                        users.map((user, index) => <tbody><TableRow
                            key={user._id}
                            user={user}
                            index={index}
                            handleDeleteBtn={handleDeleteBtn}
                        ></TableRow></tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Table;