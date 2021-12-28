import React from 'react';
import styles from './Catagory.module.scss'
import CatagoryContent from './CatagoryContent';
import CatagoryHeader from './CatagoryHeader';

function Catagory() {
    return (
        <div className={`${styles.catagory}`}>
            <table className={`${styles.tableCatagory}`}>
                <CatagoryHeader></CatagoryHeader>
                <CatagoryContent></CatagoryContent>
                <CatagoryContent></CatagoryContent>
                <CatagoryContent></CatagoryContent>
                <CatagoryContent></CatagoryContent>
                <CatagoryContent></CatagoryContent>
                <CatagoryContent></CatagoryContent>
                <CatagoryContent></CatagoryContent>
            </table >
        </div>
    );
}

export default Catagory;