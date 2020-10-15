import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "core/assets/imgs/arrow.svg";
import ProductPrice from "core/components/ProductPrice";
import { Product } from "core/types/Product";
import { makeRequest } from "core/utils/request";
import ProductInfoLoader from "../Loaders/ProductInfoLoader";

import "./styles.scss";

type ParamsType = {
  productId: string;
};

const ProductDetails = () => {
  const { productId } = useParams<ParamsType>();
  const [product, setProduct] = useState<Product>();
  const [isLoadingInfo, setIsLoadingInfo] = useState(false);
  const [isLoadingDesc, setIsLoadingDesc] = useState(false);

  useEffect(() => {
    setIsLoadingInfo(true);
    setIsLoadingDesc(true);
    makeRequest({ url: `/products/${productId}` })
      .then((response) => setProduct(response.data))
      .finally(() => {
        setIsLoadingInfo(false);
      })
      .finally(() => {
        setIsLoadingDesc(false);
      });
  }, [productId]);

  return (
    <div className="product-details-container">
      <div className="card-base border-radius-20 product-details">
        <NavLink to="/products" className="product-details-goback">
          <ArrowIcon className="icon-goback" />
          <h1 className="text-goback">VOLTAR</h1>
        </NavLink>
        <div className="row">
          <div className="col-6 pr-5">
            {isLoadingInfo ? (
              <ProductInfoLoader />
            ) : (
              <>
                <div className="product-details-card text-center">
                  <img
                    src={product?.imgUrl}
                    alt={product?.name}
                    className="product-details-image"
                  />
                </div>
                <h1 className="product-details-name">{product?.name}</h1>
                {product?.price && <ProductPrice price={product?.price} />}
              </>
            )}
          </div>

          <div className="col-6 product-details-card">
            {isLoadingDesc ? (
              <ProductInfoLoader />
            ) : (
              <>
                <h1 className="product-description-title">
                  Descrição do produto
                </h1>
                <p className="product-description-text">
                  {product?.description}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
