import { CHANNEL } from "./type"

export const enterChannel = (data) => {
    return {
        type: CHANNEL,
        payload: data
    }
}