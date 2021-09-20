const home = {
    getBulbasaur: () => (dispatch) => {
        fetch('https://pokeapi.co/api/v2/pokemon/1/', { method: 'get' }).then(res => res.json()).then(data => {
            dispatch({ type: 'CHANGE', payload: { bulbasaur: data } });
        });
    },
    getCharmander: () => (dispatch) => {
        fetch('https://pokeapi.co/api/v2/pokemon/4/', { method: 'get' }).then(res => res.json()).then(data => {
            dispatch({ type: 'CHANGE', payload: { charmander: data } });
        });
    },
    getSquirtle: () => (dispatch) => {
        fetch('https://pokeapi.co/api/v2/pokemon/7/', { method: 'get' }).then(res => res.json()).then(data => {
            dispatch({ type: 'CHANGE', payload: { squirtle: data } });
        });
    },
    getRandoms: () => (dispatch) => {
        const randoms = [
            { url: 'https://pokeapi.co/api/v2/pokemon/1/' },
            { url: 'https://pokeapi.co/api/v2/pokemon/4/' },
            { url: 'https://pokeapi.co/api/v2/pokemon/7/' },
        ];
        const index = Math.floor(Math.random() * 3);
        fetch(randoms[index].url, { method: 'get' }).then(res => res.json()).then(data => {
            dispatch({ type: 'CHANGE', payload: { random: data } });
        });
    },

};

export default home;
