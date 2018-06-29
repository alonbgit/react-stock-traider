import * as actionTypes from './actionTypes';

export const buyStock = (payload) => {
    return {
        type: actionTypes.BUY_STOCK,
        ...payload
    }
}

export const sellStock = (payload) => {
    return {
        type: actionTypes.SELL_STOCK,
        ...payload
    }
}

export const endDay = (payload) => {
    return {
        type: actionTypes.END_DAY
    }
}