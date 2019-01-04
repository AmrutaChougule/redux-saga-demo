import { fromJS } from 'immutable';

/** My Store **/
const myInitialState = fromJS({
})

export const myReducer = function (state = myInitialState, action) {
    switch (action.type) {
        default:
            return state;
    }

    return state;
}
