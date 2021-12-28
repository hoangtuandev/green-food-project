import React from 'react';
import styles from './Products.module.scss'
import ProductsContent from './ProductsContent';
import ProductsFilter from './ProductsFilter/ProductsFilter';
import ProductsHeader from './ProductsHeader';

function Products() {
    return (
        <div className={`${styles.products}`}>
            <ProductsFilter></ProductsFilter>
            <table className={`${styles.tableProducts}`}>
                <ProductsHeader></ProductsHeader>
                <ProductsContent></ProductsContent>
                <ProductsContent></ProductsContent>
                <ProductsContent></ProductsContent>
                <ProductsContent></ProductsContent>

            </table >
        </div >
    );
}

export default Products;