import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ProductInfoContext } from '../../../context/productViewContext';
import { QuantityInput } from '../../components/NumberInputMUI';
import { Button } from '@mui/material';

export const ProductInfo = () => {
    const product = React.useContext(ProductInfoContext);
    console.log(product);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Box sx={style}>
            <div className="flex">
                <div className="container-product-left">
                    <div className="row-product">
                        <img src={product.productInfo.img} className="product-img product-details-img" alt="product" />
                    </div>
                </div>
                <div className="container-full product-details-mg">
                    <div className="product-info">
                        <div className="poly-component__price">
                            <div className="poly-price__current">
                                <span class="money-amount__currency-symbol" aria-hidden="true">{product.productInfo.name}</span>
                            </div>
                        </div>
                        <div className="product-price poly-component__price">
                            <div className="poly-price__current">
                                <span class="money-amount money-amount--cents-superscript"
                                    role="img"
                                    aria-label={`${product.productInfo.price} pesos`}
                                    aria-roledescription="Precio"
                                >
                                    <span class="money-amount__currency-symbol" aria-hidden="true">$</span>
                                    <span class="money-amount__fraction" aria-hidden="true">{product.productInfo.price}</span>
                                </span>
                            </div>
                        </div>
                        <div className="product-price poly-component__price">
                            <div className="poly-price__current">
                                <QuantityInput
                                    maxQuantity={product.productInfo.stock}
                                    onChange={(event, newValue) => console.log(`${event.type} event: the new value is ${newValue}`)}
                                />
                                <Button>Añadir a carrito</Button>
                            </div>
                            <div className="product-price poly-price__current">
                                Max: {product.productInfo.stock}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default ProductInfo;
