import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../../../core/assets/imgs/arrow.svg';
import './styles.scss';

type ParamsType = {
    productId: string;
}

const ProductDetails = () => {
    const { productId } = useParams<ParamsType>();
    return (
        <div className="product-details-container">
            <div className="card-base border-radius-20 product-details">
                <NavLink to="/products" className="product-details-goback">
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">VOLTAR</h1>
                </NavLink>
            </div>
        </div>
    );
};

export default ProductDetails;