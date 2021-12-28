import React from 'react';
import styles from './Catagory.module.scss'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

function CatagoryContent(props) {
    return (
        <tbody>
            <tr>
                <td>SP00001</td>
                <td className={`${styles.catagoryName}`}>Kiwi New Zeadland Abcde</td>

                <td className={`${styles.catagoryButton}`}>
                    <button className={`${styles.buttonEdit}`}>
                        <span className={`${styles.buttonIcon}`}><AiFillEdit /></span>
                        <span className={`${styles.buttonLabel}`}>Sửa</span>
                    </button>
                    <button className={`${styles.buttonDelete}`}>
                        <span className={`${styles.buttonIcon}`}><AiFillDelete /></span>
                        <span className={`${styles.buttonLabel}`}>Xóa</span>
                    </button>
                </td>
            </tr>
        </tbody>
    );
}

export default CatagoryContent;