import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';

const Father = () => {
    return (
        <div>
            <h2>Father</h2>
            <div style={{display:'flex'}}>
                <Brother></Brother>
                <Myself></Myself>
            </div>
        </div>
    );
};

export default Father;