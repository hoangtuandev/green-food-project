import React from 'react';
import styles from './Catagory.module.scss'

function CatagoryHeader(props) {
    return (
        <thead>
            <tr className={`${styles.tableName}`}><td>Loại sản phẩm</td></tr>
            <tr className={`${styles.tableAmount}`}><td>Số lượng: 500</td></tr>
            <tr className={`${styles.tableTitles}`}>
                <td className={`${styles.titleId}`}><span>Mã loại</span></td>
                <td className={`${styles.titleName}`}><span>Tên loại</span></td>
                <td className={`${styles.none}`}></td>
            </tr>
            <tr>
                <td className={`${styles.emptyRow}`}><span>Empty</span></td>
            </tr>
        </thead>
    );
}

export default CatagoryHeader;