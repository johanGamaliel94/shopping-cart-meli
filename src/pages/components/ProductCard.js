
export const ProductCard = ({name, path, price, handler}) => {

    return (
        <div className="col product" onClick={handler}>
            <div className="row-product">
                <img src={path} className="product-img" alt="logo" />
            </div>
            <div className="row-product row-justify-left">
                <span className="product-name">{name}</span>
            </div>
            <div className="row-product row-justify-left">
                <div className="poly-component__price">
                    <div className="poly-price__current">
                        <span class="money-amount money-amount--cents-superscript"
                            role="img"
                            aria-label={`${price} pesos`}
                            aria-roledescription="Precio"
                        >
                            <span class="money-amount__currency-symbol" aria-hidden="true">$</span>
                            <span class="money-amount__fraction" aria-hidden="true">{Intl.NumberFormat().format(price)}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
