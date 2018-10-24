import { actiontypes } from './actions';

const initialNumberState = { value: 0 };

export function number(state = initialNumberState, action) {
    switch (action.type) {
        case actiontypes.INCREMENT: {
            return { value: state.value+1 };
        }
        default: {
            return state;
        }
    }
}