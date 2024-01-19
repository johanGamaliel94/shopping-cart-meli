import React from 'react';

import Box from '@mui/material/Box';

import { ProductInfoContext } from '../../../context/productViewContext';
import { QuantityInput } from '../../components/NumberInputMUI';
import { Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

export const ProductInfo = ({ cartItems }) => {
    const [feedback, setFeedback] = React.useState({
        open: false,
        message: 'Se ha agregado el producto al carrito',
        severity: 'success'
    });
    const product = React.useContext(ProductInfoContext);

    const [quantity, setQuantity] = React.useState(1);
    const [stock, setStock] = React.useState();

    const addItem = (product) => {
        let quantityAux = quantity;
        let index = 0;
        let itemAux = {};
        if (stock - quantity < 0) return setFeedback({...feedback, open: true, message: 'No hay suficiente stock', severity: 'error'});
        setFeedback({...feedback, open: true, message: `${product.productInfo.name} se ha agregado correctamente al carrito`, severity: 'success'})
        setStock(stock - quantity);
        document.getElementsByClassName("happy-shopping-icon-bag")[0].classList.add("cart-animated");
        cartItems.current.forEach((item, i) => {
            if (item.name === product.productInfo.name) {
                quantityAux += quantity;
                index = i;
                itemAux = item;
                itemAux.qty += quantity;
            }
        });
        if (quantityAux === quantity) {
            cartItems.current.push({ 
                    name: product.productInfo.name,
                    qty: quantity, 
                    price: product.productInfo.price,
                    img: product.productInfo.img 
            });
            return;
        }
        cartItems.current[index] = itemAux;
    }
    
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

    React.useEffect(() => {
        setQuantity(1);
        setStock(product.productInfo.stock);
    }, [product.productInfo.stock]);

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
                                    <span class="money-amount__fraction" aria-hidden="true">{Intl.NumberFormat().format(product.productInfo.price)}</span>
                                </span>
                            </div>
                        </div>
                        <div className="product-price poly-component__price">
                            <div className="poly-price__current">
                                <QuantityInput
                                    value={quantity}
                                    maxQuantity={stock}
                                    onChange={(event, newValue) => setQuantity(newValue)}
                                />
                                <Button onClick={() => addItem(product)}>Añadir a carrito</Button>
                            </div>
                            <div className="product-price poly-price__current">
                                Max: {stock}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar
                open={feedback.open}
                autoHideDuration={3000}
                message={feedback.message}
                onClose={(event, reason) => {
                    if (reason === 'clickaway') {
                        return;
                    }
                    setFeedback({ open: false, message: '', severity: '' });
                }}
            />
        </Box>
    );
};

export default ProductInfo;
