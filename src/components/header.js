import React from 'react';

import logo from '../logo_shopping.png';
import '../_commons.scss';

import { FaChevronDown } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import Badge from '@mui/material/Badge';

export const ShoppingHeader = ({items, handlerOpenCartModal}) => {
    
    return (
        <div className="bg-principal">
            <div className="row">
                <div className="container-70">
                    <div className="column">
                        <a href="/principal">
                            <img src={logo} className="App-logo" alt="logo" />
                        </a>
                    </div>
                    <nav className="happy-shopping-nav">
                        <div className="happy-shopping-nav__item">
                            <a href="/principal">Inicio</a>
                            <FaChevronDown className="happy-shopping-white" />
                        </div>
                        <div className="happy-shopping-nav__item">
                            <a href="/principal">Ofertas</a>
                            <FaChevronDown className="happy-shopping-white" />
                        </div>
                        <div className="happy-shopping-nav__item">
                            <a href="/principal">Temporada</a>
                            <FaChevronDown className="happy-shopping-white" />
                        </div>
                    </nav>
                </div>
                <div className="container-30">
                    <div className="column">
                        <Badge badgeContent={items.current.length} className="badge" color="primary">
                            <RiShoppingCart2Line
                                className="happy-shopping-white happy-shopping-icon-bag"
                                onClick={handlerOpenCartModal}
                            />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingHeader;
