import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const GrandFather = () => {
    return (
        <div>
            <h2>GrandFather</h2>
            <div style={{display:'flex'}}>
            <Father></Father>
            <Uncle></Uncle>
            </div>
        </div>
    );
};

export default GrandFather;