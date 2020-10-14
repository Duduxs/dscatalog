import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import { NavLink } from 'react-router-dom';
import { makeRequest } from '../../core/utils/request';
import { ProductsResponse } from '../../core/types/Product';

import './styles.scss';

const Catalog = () => { 

    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
    const [order, setOrder] = useState('id');

    useEffect(() => {
        const params = {
            page: 0,
            linesPerPage: 20,
            orderBy: order,
            direction: 'DESC'
        }

        makeRequest({ url: '/products', params})
        .then(response => setProductsResponse(response.data));
        
    }, [order])

    return(
        <div className="catalog-container">
        <h1 className="catalog-title">
            Catálogo de produtos
        </h1>

        <div className="catalog-button-container">
            <button className="catalog-button-name" onClick={() => setOrder('name')}>Name</button>
            <button className="catalog-button-price" onClick={() => setOrder('price')}>Price</button>
        </div>

        <div className="catalog-products">
            {productsResponse?.content.map(product => (
             <NavLink to={`/products/${product.id}`} key={product.id}><ProductCard product={product}/>
             </ NavLink>
            ))}
        </div>
    </div>
    )
};

export default Catalog;