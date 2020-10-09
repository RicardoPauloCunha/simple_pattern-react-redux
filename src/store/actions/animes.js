export const ADD_ANIME = "ADD_ANIME";
export const ADD_LIST_ANIME = "ADD_LIST_ANIME";

export const addAnime = (newAnime) => ({
    type: ADD_ANIME,
    newAnime
});

export function addListAnime(listNewAnime) {
    return {
        type: ADD_LIST_ANIME,
        listNewAnime
    }
}