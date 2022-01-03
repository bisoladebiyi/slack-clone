import { CHANNEL } from "./type"

const initialState = {
    data: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case CHANNEL: return {
            ...state,
            data: action.payload
        }
        default: return state
    }
}
export default reducer