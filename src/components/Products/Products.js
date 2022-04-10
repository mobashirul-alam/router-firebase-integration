import React from 'react';
import useFirebase from '../../hooks/useFirebase/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h3>User of this site is now</h3>
            <h2>{user ? user.displayName : 'VOOOOOOOOOOT'}</h2>
        </div>
    );
};

export default Products;