import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import './StockTraider.scss';

import MainPage from '../MainPage/MainPage';
import Portfolio from '../Portfolio/Portfolio';
import Stocks from '../Stocks/Stocks';

class StockTraider extends Component {

    render() {
        return (
            <div className="stock-traider">
                <Header/>
                <div className="router-view">
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/Portfolio" exact component={Portfolio}/>
                    <Route path="/Stocks" exact component={Stocks}/>
                </div>
            </div>
        )
    }

}

export default StockTraider;