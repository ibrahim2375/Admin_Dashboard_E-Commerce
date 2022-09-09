import { ActionsType } from '../ActionsType'
export const get_admin = (admin, admin_state) => ({
    type: ActionsType.GET_ADMIN,
    payload: {
        admin,
        admin_state,
    }
})
