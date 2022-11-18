import { store } from './redux/store';

interface NI_ITEM {
  id: String;
  title: String;
  image: String;
  votes: Number;
}

export default function NotInterestedData(): NI_ITEM[] {

    const storeStates = (store.getState());
    const notInterestedState = storeStates.notInterested
    const notInterestedRestaurants = notInterestedState.restaurants
    const returnedRestaurants = notInterestedRestaurants.map(({id, title, image, votes}: NI_ITEM) => {
      return {
        id, 
        title,
        image,
        votes
      }
    })
    return returnedRestaurants;

}


