import { ADD_ANIME, ADD_LIST_ANIME } from '../actions/animes';

const initialState = {
    myList: ["Fate", "Charllote", "Steins Gate"]
}

export const animesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ANIME:
            return {
                ...state,
                myList: [...state.myList, action.newAnime]
            }

        case ADD_LIST_ANIME:
            return {
                ...state,
                myList: [...state.myList, ...action.listNewAnime]
            }

        default:
            return state;
    }
}
