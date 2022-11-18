import { store } from './redux/store';

interface INTERESTED_ITEM {
  id: String;
  title: String;
  image: String;
  votes: Number;
}

export default function interestedData(): INTERESTED_ITEM[] {

  const storeStates = (store.getState());
  const interestedState = storeStates.interested
  const interestedRestaurants = interestedState.restaurants
  const returnedRestaurants = interestedRestaurants.map(({id, title, image, votes}: INTERESTED_ITEM) => {
    return {
      id, 
      title,
      image,
      votes
    }
  })
  return returnedRestaurants;

}
