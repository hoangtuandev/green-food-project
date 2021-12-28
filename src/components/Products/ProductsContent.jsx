import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import styles from './Products.module.scss'
import Kiwi from '../../images/Kiwi.jpg'


function ProductsContent(props) {
    return (
        <tbody>
            <tr>
                <td className={`${styles.productImage}`}><img src={Kiwi} alt="" /></td>
                <td>SP00001</td>
                <td className={`${styles.productsName}`}>Kiwi New Zeadland </td>
                <td className={`${styles.productStyles}`}>250000</td>
                <td className={`${styles.productStyles}`}>KG</td>
                <td className={`${styles.productStyles}`}>120</td>
                <td className={`${styles.productButton}`}>
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

export default ProductsContent;