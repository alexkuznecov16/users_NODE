import React from 'react';
import './assets/App.css';
import UserList from './components/UserList';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="container">
              <UserList />
            </div>
        </div>
    );
};

export default App;
