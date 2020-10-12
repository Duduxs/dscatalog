import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../../../core/assets/imgs/arrow.svg';
import { ReactComponent as ProductImage} from '../../../../core/assets/imgs/product.svg';
import ProductPrice from '../../../../core/components/ProductPrice';
import './styles.scss';

type ParamsType = {
    productId: string;
}

const ProductDetails = () => {
    const { productId } = useParams<ParamsType>();
    console.log(productId);

    return (
        <div className="product-details-container">
            <div className="card-base border-radius-20 product-details">
                <NavLink to="/products" className="product-details-goback">
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">VOLTAR</h1>
                </NavLink>
                <div className="row">
                    <div className="col-6 pr-5">
                        <div className="product-details-card text-center">
                            <ProductImage className="product-details-image" />
                        </div>
                        <h1 className="product-details-name">
                            Computador Desktop - Intel Core i7
                        </h1>
                        <ProductPrice price="2.779,00"/>
                    </div>
                    <div className="col-6 product-details-card">
                        <h1 className="product-description-title">
                            Descrição do produto
                        </h1>
                        <p className="product-description-text">
                            Seja um mestre em multitarefas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;