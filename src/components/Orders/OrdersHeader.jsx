import React from 'react';
import styles from './Orders.module.scss'

function OrdersHeader(props) {
    return (
        <thead>
            <tr className={`${styles.tableName}`}><td>Tất cả đơn hàng</td></tr>
            <tr className={`${styles.ordersAmount}`}><td>500 đơn hàng</td></tr>
            <tr className={`${styles.tableTitle}`}>
                <td>Mã đơn hàng</td>
                <td>Khách hàng</td>
                <td>Sản phẩm</td>
                <td>Tổng tiền</td>
                <td>Thời gian</td>
                <td>Trạng thái</td>
            </tr>
            <tr>
                <td className={`${styles.emptyRow}`}><span>Empty</span></td>
            </tr>
        </thead>
    );
}

export default OrdersHeader;