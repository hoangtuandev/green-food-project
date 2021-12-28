import React from 'react';
import { ImEye, ImBlocked } from 'react-icons/im'
import styles from './Acounts.module.scss'

function AccountsContent(props) {
    return (
        <tr className={`${styles.orderItem}`}>
            <td>1234567ABCDEF</td>
            <td className={`${styles.itemName}`}>Phạm Hoàng Tuấn</td>
            <td className={`${styles.itemPosition}`}><span>Nhân viên</span></td>
            <td className={`${styles.itemState}`}><span>Đang hoạt động</span></td>
            <td className={`${styles.catagoryButton}`}>
                <button className={`${styles.buttonEdit}`}>
                    <span className={`${styles.buttonIcon}`}><ImEye /></span>
                    <span className={`${styles.buttonLabel}`}>Chi tiết</span>
                </button>
                <button className={`${styles.buttonDelete}`}>
                    <span className={`${styles.buttonIcon}`}><ImBlocked /></span>
                    <span className={`${styles.buttonLabel}`}>Vô hiệu   </span>
                </button>
            </td>
        </tr>
    );
}

export default AccountsContent;