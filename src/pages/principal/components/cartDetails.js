import React from 'react';

import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';

import { styled } from '@mui/system';
import { CartItemsContext } from '../../../context/cartItemsContext';
import { Button as BaseButton, buttonClasses } from '@mui/material';

export const CartDetails = () => {
    const cartDetails = React.useContext(CartItemsContext);
    const total = React.useRef(0);

    const [feedback, setFeedback] = React.useState({
        open: false,
        message: 'Se ha confirmado el pedido',
        severity: 'success'
    });
    
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

    const Button = styled(BaseButton)(
        ({ theme }) => `
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1.5;
        background-color: #007FFF;
        padding: 8px 16px;
        border-radius: 8px;
        color: white;
        transition: all 150ms ease;
        cursor: pointer;
        border: 1px solid #007FFF;
        box-shadow: 0 2px 1px ${
          theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
        }, inset 0 1.5px 1px #3399FF, inset 0 -2px 1px #3399FF;
      
        &:hover {
          background-color: #0072E5;
        }
      
        &.${buttonClasses.active} {
          background-color: #0066CC;
          box-shadow: none;
          transform: scale(0.99);
        }
      
        &.${buttonClasses.focusVisible} {
          box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? '#66B2FF' : '#99CCFF'};
          outline: none;
        }
        `,
      );

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
                    <div className="poly-price__current">
                        <span class="money-amount money-amount--cents-superscript">
                            <Button onClick={() => setFeedback({...feedback, open: true, message: `Se ha confirmado la compra, en breve te notificaremos.`, severity: 'success'})}>Confirmar pedido</Button>
                        </span>
                    </div>
                </div>
                <Snackbar
                    open={feedback.open}
                    severity={feedback.severity}
                    autoHideDuration={3000}
                    message={feedback.message}
                    onClose={(event, reason) => {
                        if (reason === 'clickaway') {
                            return;
                        }
                        setFeedback({ open: false, message: '', severity: '' });
                    }}
                />
            </div>
            
        </Box>
    );
};

export default CartDetails;
