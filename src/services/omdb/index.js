export const searchFilm = filmName => {
    const API_KEY = '?apikey=ef44ae0d';
    const url = `http://www.omdbapi.com/${API_KEY}&t=`;

    if (!filmName) {
        return Promise.reject({
            message: 'Film name is required'
        });
    }

    return fetch(url + filmName)
        .then(stream => stream.json())
};