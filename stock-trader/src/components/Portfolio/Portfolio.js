import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';

import './Portfolio.scss';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

class Portfolio extends Component {

    render() {

        return (
            <div className="portfolio">
                {this.props.portfolio.map((portfolioItem, index) => {
                    return <PortfolioItem name={portfolioItem.stock.name}
                                          price={portfolioItem.stock.price}
                                          className={index % 2 === 0 ? 'new-line' : ''}
                                          sellStock={(amount) => this.props.sellStock({id: portfolioItem.stock.id, amount: amount})}
                                          key={portfolioItem.stock.id}/>
                })}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        portfolio: state.stocks.portfolio
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sellStock: (payload) => dispatch(actions.sellStock(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);