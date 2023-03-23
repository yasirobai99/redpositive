import React, { useEffect, useState } from 'react';
import Table from './Table';
import { toast } from 'react-toastify';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    //Handle Delete
    const handleDeleteBtn = id => {
        console.log(id);

        const procced = window.confirm('You want to delete?');
        if (procced) {
            const url = `localhost:5000/${id}`;
            console.log(url);

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = users.filter(todo => todo._id !== id);
                        setUsers(remaining);
                        toast.error('Deleted Successfully');
                    }
                })
        };



        /* fetch(`localhost:5000/users/${id}`, {
           method: "DELETE"
       })
           .then(res => res.json())
           .then(result => {
               console.log(result);
           }) */

    };

    return (
        <div>
            <h2 className='text-4xl text-neutral font-bold text-center pt-5'>Welcome To <span className='text-red-700'>RedPositive</span> Table</h2>
            <Table users={users} setUsers={setUsers} handleDeleteBtn={handleDeleteBtn} />
        </div>
    );
};

export default Home;