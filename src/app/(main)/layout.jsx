import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            {children}
            
        </div>
    );
};

export default layout;