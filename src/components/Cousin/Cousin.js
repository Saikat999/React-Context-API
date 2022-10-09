import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Cousin = () => {
    const ornaments = useContext(RingContext);
    return (
        <div>
            <h2>Cousin</h2>
            <small>{ornaments}</small>
        </div>
    );
};

export default Cousin;