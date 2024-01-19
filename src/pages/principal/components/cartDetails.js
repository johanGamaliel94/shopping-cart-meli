import React from 'react';

import Box from '@mui/material/Box';

import { CartItemsContext } from '../../../context/cartItemsContext';

export const CartDetails = () => {
    const cartDetails = React.useContext(CartItemsContext);
    const total = React.useRef(0);
    
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

    let totalAux = 0;
    cartDetails.cartItems.current.forEach(item => {
        totalAux += item.price * item.qty;
    });
    total.current = Intl.NumberFormat().format(totalAux);

    return (
        <Box sx={style}>
            <div className="flex">
                <div className="container-product-left cart-items">
                    {cartDetails.cartItems.current.map((item, i) => (
                        <div key={i}>
                            <div className="row-product">
                                <img src={item.img} className="product-img product-details-img product-details-img-cart" alt="product" />
                            </div>
                            <div className="product-price poly-component__price">
                                <div className="poly-price__current">
                                    <span class="money-amount__currency-symbol" aria-hidden="true">Cantidad: {item.qty}</span>
                                </div>
                            </div>
                            <div className="product-price poly-component__price">
                                <div className="poly-price__current">
                                    <span class="money-amount__currency-symbol" aria-hidden="true">{item.name}</span>
                                </div>
                            </div>
                            <div className="product-price poly-component__price">
                                <div className="poly-price__current">
                                    <span class="money-amount money-amount--cents-superscript"
                                        role="img"
                                        aria-label={`${item.price * item.qty} pesos`}
                                        aria-roledescription="Precio"
                                    >
                                        <span class="money-amount__currency-symbol" aria-hidden="true">$</span>
                                        <span class="money-amount__fraction" aria-hidden="true">{Intl.NumberFormat().format(item.price * item.qty)}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="container-full product-details-mg">
                    <div className="poly-price__current">
                        <span class="money-amount money-amount--cents-superscript"
                            role="img"
                            aria-label={`${total.current} pesos`}
                            aria-roledescription="Total"
                        >
                            <span class="money-amount__currency-symbol" aria-hidden="true">Total: $</span>
                            <span class="money-amount__fraction" aria-hidden="true">{total.current}</span>
                        </span>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default CartDetails;
