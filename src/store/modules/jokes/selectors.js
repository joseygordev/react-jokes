import { createSelector } from 'reselect';

const getCategoriesState = (state) => state.categories;
const getJokesState = (state) => state.jokes;
const getCategoryParam = (_, props) => props ? props.category : null;

const getJoke = createSelector(
  [getCategoriesState, getJokesState, getCategoryParam],
  (categories, jokes, category) => {
    const jokesIds = categories.byId[category] ? categories.byId[category] : [];
    let joke = {};

    if (jokesIds.length) {
      const randomJoke = jokesIds[Math.floor(Math.random() * jokesIds.length)];
      joke = jokes.byId[randomJoke];
    } 

    return joke;
  }
);

export default getJoke;