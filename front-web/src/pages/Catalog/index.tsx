import React from 'react';
import ProductCard from './components/ProductCard';
import './styles.scss';
import { NavLink } from 'react-router-dom';

const Catalog = () => (
    <div className="catalog-container">
        <h1 className="catalog-title">
            Catálogo de produtos
        </h1>
        <div className="catalog-products">
            <NavLink to="/products/1"><ProductCard /></ NavLink>
            <NavLink to="/products/2"><ProductCard /></ NavLink>
            <NavLink to="/products/3"><ProductCard /></ NavLink>
            <NavLink to="/products/4"><ProductCard /></ NavLink>
            <NavLink to="/products/5"><ProductCard /></ NavLink>
            <NavLink to="/products/6"><ProductCard /></ NavLink>
            <NavLink to="/products/7"><ProductCard /></ NavLink>
            <NavLink to="/products/8"><ProductCard /></ NavLink>
        </div>
    </div>
);

export default Catalog;