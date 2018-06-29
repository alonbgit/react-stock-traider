import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './StockItem.scss';

class StockItem extends Component {

    state = {
        amount: ''
    }

    render() {
        return (
            <div className={["stock-item", this.props.className].join(' ')}>
                <div className="stock-header">
                    <span className="stock-name">{this.props.name}</span>
                    <span className="stock-price">(Price: {this.props.price})</span>
                </div>
                <div className="stock-input">
                    <input type="number"
                           placeholder="Quantity"
                           className="quantity"
                           onChange={(e) => this.setState({amount: parseInt(e.target.value)})}
                           value={this.state.amount}/>
                    <button className="buy-btn" onClick={() => this.props.buyStock(this.state.amount)}>Buy</button>
                </div>
            </div>
        )
    }

}

StockItem.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number
}

export default StockItem;
