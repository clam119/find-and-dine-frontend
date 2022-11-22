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
    const returnedRestaurants = notInterestedRestaurants.map(({id, title,imageUrls, reviewsCount, address, categories, categoryName, city, location, placeId, postalCode, reviewsDistribution,url, website}: INTERESTED_ITEM) => {
      return {
        id, 
        title,
        imageUrls, 
        reviewsCount, 
        address, 
        categories, 
        categoryName, 
        city,
        location, 
        placeId, 
        postalCode, 
        reviewsDistribution,
        url, 
        website
      }
    })
    return returnedRestaurants;
  
  }
  


