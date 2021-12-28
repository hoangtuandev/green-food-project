import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';
import Menu from './components/Menu/Menu'
import Products from './components/Products/Products'
import Catagory from './components/Catagory/Catagory';
import Orders from './components/Orders/Orders'
import Accounts from './components/Accounts/Accounts';

function App() {
    return (
        <div className='app'>
            <Sidebar></Sidebar>
            <Menu></Menu>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/products" element={<Products />} />
                <Route path="/catagorys" element={<Catagory />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/accounts" element={<Accounts />} />
            </Routes>
        </div>
    );
}

export default App;
