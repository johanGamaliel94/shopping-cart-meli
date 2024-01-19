import React from 'react';

import '../principal.scss';
import '../../../_commons.scss';
import Carousel from "react-multi-carousel";
import Modal from '@mui/material/Modal';

import { ShoppingHeader } from '../../../components/header';
import { ShoppingFooter } from '../../../components/footer';
import { ProductCard } from '../../components/ProductCard';
import { ProductInfo } from '../components/productInfo';

import { ProductInfoContext } from '../../../context/productViewContext';
import { CartItemsContext } from '../../../context/cartItemsContext';
import CartDetails from '../components/cartDetails';
const images = require.context('../../../images/products', true);

export const PrincipalPage = () => {
    const [open, setOpen] = React.useState(false);
    const [openCart, setOpenCart] = React.useState(false);
    const [productInfo, setProductInfo] = React.useState({});
    const [products, setProducts] = React.useState([]);
    const cartItems = React.useRef([]);

    const handleOpen = (product) => {
        setOpen(true);
        setProductInfo(product);
    };
    const handleClose = () => { 
        setOpen(false);
        setOpenCart(false);
        document.getElementsByClassName("happy-shopping-icon-bag")[0].classList.remove("cart-animated");
    };

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    React.useEffect(() => {
        let productsAux = [];
        images.keys().forEach(image => {
            const imageData = image.split("-");
            productsAux.push({
                name: imageData[0]
                .replaceAll("_", " ")
                .replace("./","")
                .replace(".png",""),
                img: images(image),
                price: imageData[1].replace('.png', '').replace('.jpg', ''),
                stock: Math.floor(Math.random() * 100),
            });
        });
        setProducts(productsAux);
    }, []);
    
    
    return (
        <>
            <ShoppingHeader items={cartItems} handlerOpenCartModal={setOpenCart} />
            <ProductInfoContext.Provider value={{productInfo}}>
                <Modal
                    classes="product-info-details"
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <ProductInfo cartItems={cartItems} />
                </Modal>
            </ProductInfoContext.Provider>
            <CartItemsContext.Provider value={{cartItems}}>
                <Modal
                    classes="products-info-details"
                    keepMounted
                    open={openCart}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <CartDetails />
                </Modal>
            </CartItemsContext.Provider>
            <div className="carousel-full bg-meli">
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    keyBoardControl={true}
                    customTransition="all 1"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    itemClass="carousel-item-padding-40-px"
                    responsive={responsive}
                    className="products"
                >
                    {products.map(product => (
                    <ProductCard
                        name={product.name}
                        path={product.img}
                        price={product.price}
                        handler={() => handleOpen(product)}
                    />))}
                </Carousel>
            </div>
            <ShoppingFooter />
        </>
    );
}

export default PrincipalPage;
