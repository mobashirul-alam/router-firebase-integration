import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)

const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h3>User of this site is now</h3>
            <h2>{user ? user.displayName : 'VOOOOOOOOOOT'}</h2>
        </div>
    );
};

export default Products;