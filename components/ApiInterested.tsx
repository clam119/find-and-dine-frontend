import { store } from './redux/store';

interface INTERESTED_ITEM {
  id: String;
  title: String;
  imageUrls: String[]
  reviewsCount: Number
  address: String
  categories: String[]
  categoryName: String;
  city: String;
  location: Location;
  placeId: String;
  postalCode: String;
  reviewsDistribution: ReviewsDistribution
  url: String;
  website: String;
}

export default function interestedData(): INTERESTED_ITEM[] {

  const storeStates = (store.getState());
  const interestedState = storeStates.interested
  const interestedRestaurants = interestedState.restaurants
  const returnedRestaurants = interestedRestaurants.map(({id, title,imageUrls, reviewsCount, address, categories, categoryName, city, location, placeId, postalCode, reviewsDistribution,url, website}: INTERESTED_ITEM) => {
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
