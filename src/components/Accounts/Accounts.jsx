import React from 'react';
import AccountsContent from './AccountsContent';
import AccountsHeader from './AccountsHeader';
import styles from './Acounts.module.scss'

function Accounts(props) {
    return (
        <div className={`${styles.accounts}`}>
            <table className={`${styles.tableAccounts}`}>
                <AccountsHeader></AccountsHeader>
                <tbody>
                    <AccountsContent></AccountsContent>
                    <AccountsContent></AccountsContent>
                    <AccountsContent></AccountsContent>
                    <AccountsContent></AccountsContent>
                    <AccountsContent></AccountsContent>
                    <AccountsContent></AccountsContent>
                    <AccountsContent></AccountsContent>
                </tbody>
            </table>
        </div>
    );
}

export default Accounts;