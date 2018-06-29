import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MainPage.scss';
import './MainPage.scss';

class MainPage extends Component {

    render() {
        return (
            <div className="main-page">
                <div className="main-page-header">Trade or View your Portfolio</div>
                <div className="description">
                    You may Save & Load your Data<br/>
                    Click on 'End Day' to begin a new Day!
                </div>
                <hr/>
                <div className="funds">Your Funds: ${this.props.funds}</div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        funds: state.stocks.funds
    }
}

export default connect(mapStateToProps)(MainPage);