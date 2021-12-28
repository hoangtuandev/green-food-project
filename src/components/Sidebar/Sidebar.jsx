import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Sidebar.module.scss'
import SidebarLogo from './SidebarLogo';
import SidebarDashboard from './SidebarDashboard';
import SidebarCatagory from './SidebarCatagory';
import SidebarProduct from './SidebarProduct';
import SidebarOrder from './SidebarOrder';
import SidebarAccount from './SidebarAccount';
import SidebarStatistical from './SidebarStatistical';

function Sidebar() {
    return (
        <div className={`${styles.sidebar}`}>
            <SidebarLogo></SidebarLogo>
            <ul className={`${styles.sidebarMenu}`}>
                <Link to="/">
                    <SidebarDashboard></SidebarDashboard>
                </Link>
                <Link to="/catagorys"><SidebarCatagory>
                </SidebarCatagory>
                </Link>
                <Link to="/products">
                    <SidebarProduct></SidebarProduct>
                </Link>
                <Link to="/orders">
                    <SidebarOrder></SidebarOrder>
                </Link>
                <Link to="/accounts">
                    <SidebarAccount></SidebarAccount>
                </Link>
                <Link to="/statistical">
                    <SidebarStatistical></SidebarStatistical>
                </Link>
            </ul>
        </div>
    );
}

export default Sidebar;