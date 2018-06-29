import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';

import './Header.scss';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <ul className="left-items">
                    <li className="stock-traider-header">
                        <Link to="/">Stock Traider</Link>
                    </li>
                    <li className="header-item">
                        <Link to="/Portfolio">Portfolio</Link>
                    </li>
                    <li className="header-item">
                        <Link to="/Stocks">Stocks</Link>
                    </li>
                </ul>
                <ul className="right-items">
                    <li className="header-item end-day-item" onClick={this.props.endDay}>End Day</li>
                    <li className="header-item">Save & Load</li>
                    <li className="header-item">Funds: ${this.props.funds}</li>
                </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        funds: state.stocks.funds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        endDay: () => dispatch(actions.endDay())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);