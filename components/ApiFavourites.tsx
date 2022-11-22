import { store } from './redux/store';

interface FAVOURITE_ITEM {
      id: String;
      title: String;
      image: String;
      votes: Number;
    }
  
export default function favouriteData(): FAVOURITE_ITEM[] {
    const storeStates = (store.getState());
    const favouriteState = storeStates.favourited;
    const favouritedRestaurants = favouriteState.restaurants;
    const returnedRestaurants = favouritedRestaurants.map(({id, title, image, votes}: FAVOURITE_ITEM) => {
      return {
        id, 
        title,
        image,
        votes
      }
    })
      return returnedRestaurants;
    }
    