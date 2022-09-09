import { ActionsType } from '../ActionsType'
const initialState = {
    admin: null,
    admin_state: false,
}
export const admin_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionsType.GET_ADMIN:
            return {
                ...state,
                admin_state: action.payload.admin_state,
                admin: action.payload.admin,
            }
        default:
            return state;
    }
}