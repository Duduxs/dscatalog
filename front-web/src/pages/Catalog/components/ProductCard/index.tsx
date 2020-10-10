import React from 'react';
import {ReactComponent as ProductImage} from '../../../../core/assets/imgs/product.svg';
import './styles.scss';

type Props = {
    name : string,
    price: number;
}

const ProductCard = () => (
    <div className="card-base border-radius-10 product-card">
       <ProductImage />
       <div className="catalog-product-info">
            <h6 className="catalog-product-name">
                Computador Desktop - Intel Core i7
            </h6>
            <div className="catalog-product-price-container">
                <span className="product-currency">R$</span>
                <h3 className="product-price">2.779,00</h3>
            </div>
        </div>
    </div>
);

export default ProductCard;