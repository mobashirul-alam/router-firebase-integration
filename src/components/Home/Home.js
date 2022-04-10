import React from 'react';
import useFirebase from '../../hooks/useFirebase/useFirebase';
import './Home.css'

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h1>This is home</h1>
            <h2>The user is : {user ? user.displayName : 'No Body'}</h2>
        </div>
    );
};

export default Home;