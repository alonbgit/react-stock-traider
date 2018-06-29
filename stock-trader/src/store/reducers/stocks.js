import * as actionTypes from '../actions/actionTypes';

const initialState = {
    funds: 500,
    stocks: [
        {
            id: 1,
            name: 'BMW',
            price: 110
        },
        {
            id: 2,
            name: 'Apple',
            price: 250
        },
        {
            id: 3,
            name: 'Google',
            price: 200
        },
        {
            id: 4,
            name: 'Twitter',
            price: 8
        }
    ],
    portfolio: []
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const buyStock = (state, action) => {
    let portfolio = [...state.portfolio];

    const stockItem = state.stocks.find((c) => c.id === action.id);
    const totalPrice = stockItem.price * action.amount;
    if (state.funds < totalPrice)
        return state;

    state.funds -= totalPrice;
    
    let portfolioItem = portfolio.find((c) => c.stock.id === action.id);

    if (!portfolioItem) {
        portfolioItem = {
            amount: action.amount,
            stock: stockItem
        }
        portfolio.push(portfolioItem);
    }
    else {
        portfolioItem.amount += action.amount;
    }

    return {
        ...state,
        portfolio
    }
}

const sellStock = (state, action) => {
    let portfolio = [...state.portfolio];

    let portfolioItemIndex = portfolio.findIndex((c) => c.stock.id === action.id);
    let portfolioItem = portfolio[portfolioItemIndex];
    if (portfolioItem.amount < action.amount)
        return state;

    portfolioItem.amount -= action.amount;
    if (portfolioItem.amount === 0) {
        portfolio.splice(portfolioItemIndex, 1);
    }

    const totalPrice = portfolioItem.stock.price * action.amount;
    state.funds += totalPrice;

    return {
        ...state,
        portfolio
    }
}

const endDay = (state, action) => {
    const stocks = [...state.stocks];
    stocks.forEach((stock) => {
        stock.price = getRandomInt(50, 1000);
    });

    return {
        ...state,
        stocks
    }
}

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.BUY_STOCK:
            return buyStock(state, action);

        case actionTypes.SELL_STOCK:
            return sellStock(state, action);

        case actionTypes.END_DAY:
            return endDay(state, action);

        default:
            return state;

    }

}

export default reducer;