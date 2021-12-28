import React from 'react';
import styles from './Menu.module.scss'
import { AiTwotoneSetting, AiFillBell } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc"

function MenuControl() {
    return (
        <div className={`${styles.menuControl}`}>
            <ul className={`${styles.controlOptions}`}>
                <li><AiTwotoneSetting /></li>
                <li><AiFillBell /></li>
                <li><MdEmail /></li>
            </ul>
            <div className={`${styles.controlUser}`}>
                <FcBusinessman className={`${styles.avatarUser}`} />
            </div>
        </div>
    );
}

export default MenuControl;