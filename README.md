# Find and Dine - Front End
This is the front-end repository for Team G3O's final project at the [Northcoders Bootcamp](https://northcoders.com) and below will be more information regarding the project itself, an introduction to the members of Team G3O, technologies explored, and attributions to relevant parties of which we have used their content.

Before that, here's a link to the Back-End directory: [Find and Dine Back-End](https://github.com/clam119/find-and-dine-backend)

## Team G3O
Team G3O comprises of only the most personable and witty bantering members at Northcoders:
* [Antony Lester](https://www.linkedin.com/in/antony-lester/) - AKA the Main Pusher
* [Christopher Lam](https://www.linkedin.com/in/christopher-lam-792b90161/) - AKA the Pull Request Gatekeeper
* [Ellie Lyons](https://www.linkedin.com/in/ellie-lyons-644302258/) - AKA the Design Visionary & Font Hater
* [Jon Linford](https://www.linkedin.com/in/jon-linford-103427255/) - AKA the Professional Instructional Voice Actor
* [Kirils Knazevs](https://www.linkedin.com/in/kirils-knazevs-4b4338258/) - AKA the Data Wrangler
* [Nikita Selanko](https://www.linkedin.com/in/nikitaselanko/) - AKA the iPhone Guardian

## Project Summary - What is Find 'n Dine?
Find 'n Dine is a mobile application that is cross-platform on both Android and iOS devices - and is one-stop solution for curious foodies that are looking to **find** a new place to **dine**. Through the use of the user's location, the application will be able to search for restaurants that satisfy a user's cuisine preferences and the user's current location. 

## Project Summary - How does it work?
Upon the user entering the application and placing their preferences and setting their location, the user will be presented with a deck of cards that include information regarding each of the restaurants that satisfy their search query. On the cards themselves, the user will be able to view an expanded card that details more about that specific restaurant for information that includes: the location, Google-based reviews, live images of the location & dishes, an external link to the restaurant's website & location, as well as a **favourite button** that will enable users to add a specific restaurant to the favourited list.

The main theme of Find 'n Dine is through its interactive and easy-to-use swipe system to selectively filter through which restaurants pique the user's interest at the time. If the user likes a restaurant that is shown to them, they will be able to **swipe right** to migrate that card to the **interested** list of restaurants, and vice-versa if they dislike a certain restaurant then they will be able to **swipe right** to migrate that card to the **not interested** list of restaurants.

In order to enhance **user experience**, we have added additional **helper icons** that will display a green heart when the user **swipes right** and before they release to let them know before they release their selected card that it is going to the **interested** list of restaurants, and vice-versa before completing the **left swipe** the user is briefly shown a red broken heart.

We understand that the list can get a bit too cluttered making it difficult to focus on the restaurants you want to see. Therefore, the user will be able to go into the interested/not interested/favourited restaurants lists and **clear the list entirely** or **restore/delete** restaurants permanently from the list.

## Tech Stack - Front End
For the Front End section of Find 'n Dine, we have used the following technology for the specified reasons:
* **TypeScript** - As a collective decision, Team G3O wished to collectively take our JavaScript skills that have been honed during the 13-week bootcamp at [Northcoders](https://northcoders.com) by learning TypeScript. We chose TypeScript as our first technology for both Front-End and Back-End because of its static type safety and self-documentation especially when members would be working on another member's codebase. In addition, as React Native/Expo do not have a suite of built-in packages, TypeScript enabled us to focus on development by catching errors before runtime which sped up production significantly.
* **React Native** - As Team G3O wished to create a cross-platform application, React-Native was the most intuitive option as the entire team has experience developing with React, and so the transition of skills ensured that we hit the ground running during development.
* **Expo** - As previously mentioned, as React Native does not come with a suite of built-in packages for cross-platform development. Team G3O utilised the capabilities of Expo to its fullest.The reason why Expo was chosen on top of React Native was because of the abstraction away from writing native code for both iOS and Android devices that would otherwise slow down production, and the abundance of packages that came built-in with the Expo eco-system enabled Team G3O to start coding the application from start-to-finish without worrying about native code development. 
* **Redux & Redux-Persist** - As Team G3O wished to store information regarding the restaurants that the user had migrated to the respective lists of interested, not interested and favourited, they needed a way to globally manage their state. In addition to this, Team G3O had to ensure that the state data from each user was stored on the device so that each reload would not erase the restaurants that the user had registered - therefore, Redux and Redux-Persist were the most fitting solution to this issue.


### Attributions
<a href="https://www.flaticon.com/free-icons/creative-commons" title="creative commons icons">Creative commons icons created by Freepik - Flaticon</a>
