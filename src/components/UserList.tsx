/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDetail from './UserDetail';
import { IoIosPhonePortrait } from "react-icons/io";
import { VscMail } from "react-icons/vsc";

const UserList: React.FC = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, [searchTerm]);

    const fetchUsers = async () => {
        const response = await axios.get(`http://localhost:3000${searchTerm ? `?term=${searchTerm}` : ''}`);
        setUsers(response.data);
    };

    const handleUserClick = (user: React.SetStateAction<null>) => {
        setSelectedUser(user);
        document.body.style.overflow = 'hidden';
        document.querySelector('.Modal')?.classList.add('pointer');
    };

    const closeUserDetail = () => {
        setSelectedUser(null);
        document.body.style.overflow = '';
        document.querySelector('.Modal')?.classList.remove('pointer');
    };

    return (
        <div className='Users__inner'>
            <input 
                type="text" 
                placeholder="Search users..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <div className="user-list">
                {users.map(user => (
                    <div className='user-list-item' key={user.email} onClick={() => handleUserClick(user)}>
                        <h2>{user.name}</h2>
                        <p className='phone'>
                            <IoIosPhonePortrait />
                            {user.phone}
                        </p>
                        <p className='email'>
                            <VscMail />
                            {user.email}
                            </p>
                    </div>
                ))}
            </div>
            {selectedUser && <UserDetail user={selectedUser} onClose={closeUserDetail} />}
        </div>
    );
};

export default UserList;
