import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';

import './Stocks.scss';
import StockItem from '../StockItem/StockItem';

class Stocks extends Component {

    render() {

        return (
            <div className="stocks">
                {this.props.stocks.map((stock, index) => {
                    return <StockItem name={stock.name}
                                      price={stock.price}
                                      className={index % 2 === 0 ? 'new-line' : ''}
                                      buyStock={(amount) => this.props.buyStock({id: stock.id, amount: amount})}
                                      key={stock.id}/>
                })}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        stocks: state.stocks.stocks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyStock: (payload) => dispatch(actions.buyStock(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);