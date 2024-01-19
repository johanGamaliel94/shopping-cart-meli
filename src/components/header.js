import React from 'react';

import logo from '../logo_shopping.png';
import '../_commons.scss';

import { FaChevronDown } from "react-icons/fa";

export const ShoppingHeader = () => {
    
    return (
        <div className="bg-principal">
            <div className="row">
                <div className="container-70">
                    <div className="col">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <nav className="happy-shopping-nav">
                        <div className="happy-shopping-nav__item">
                            <a href="/popular">Popular</a>
                            <FaChevronDown className="happy-shopping-white" />
                        </div>
                        <div className="happy-shopping-nav__item">
                            <a href="/popular">Hombre</a>
                            <FaChevronDown className="happy-shopping-white" />
                        </div>
                        <div className="happy-shopping-nav__item">
                            <a href="/popular">Popular</a>
                            <FaChevronDown className="happy-shopping-white" />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default ShoppingHeader;
