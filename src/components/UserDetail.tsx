import React from 'react';

const UserDetail: React.FC = ({ user, onClose }) => {
    return (
        <div onClick={onClose} className="modal">
            <div className="modal-content user-list-item">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{user.name}</h2>
                <p className='phone'><strong>Телефон:</strong> {user.phone}</p>
                <p className='email'><strong>Почта:</strong> {user.email}</p>
                <p className='date'><strong>Дата приема:</strong> {user.hire_date}</p>
                <p className='position'><strong>Должность:</strong> {user.position_name}</p>
                <p className='department'><strong>Подразделение:</strong> {user.department}</p>
                <p className='addition'><strong>Дополнительная информация:</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, a.</p>
            </div>
        </div>
    );
};

export default UserDetail;
