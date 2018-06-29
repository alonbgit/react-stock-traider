import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PortfolioItem.scss';

class PortfolioItem extends Component {

    state = {
        amount: ''
    }

    render() {
        return (
            <div className={["portfolio-item", this.props.className].join(' ')}>
                <div className="portfolio-header">
                    <span className="stock-name">{this.props.name}</span>
                    <span className="stock-price-quantity">(Price: {this.props.price})</span>
                </div>
                <div className="portfolio-input">
                    <input type="number"
                           placeholder="Quantity"
                           className="quantity"
                           onChange={(e) => this.setState({amount: parseInt(e.target.value)})}
                           value={this.state.amount}/>
                    <button className="sell-btn" onClick={() => this.props.sellStock(this.state.amount)}>Sell</button>
                </div>
            </div>
        )
    }

}

PortfolioItem.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    sellStock: PropTypes.func
}

export default PortfolioItem;
