import { useAddMutation } from "./helpers/useAddMutation";

const API = {
    SEND_MESSAGE: `/api/`,
};


const KEY = 'SEND_MESSAGE'

export const useSendMessage = () => useAddMutation(KEY, API.SEND_MESSAGE);

