# GameHub

## Summary
Without a doubt my favorite project and the one that made it all really 'click' and allowed me to see how it all comes together. I knew that I had wanted to make an ecommerce type of application, and being interested in video games since I was a child, I chose to make a "Steam-like" e-commerce application that I call GameHub. I was ecstatic when I found the RAWG API, which is a database of thousands of video games and lots of little details and data to play around with, which confirmed that I was on the right track. Some of the ways users can interact with GameHub:

### Functionality
- sign up / sign into the application
- search and view details of a game
- filter games by platform as well as genre using the platform filter tab
- add games to their wishlist or cart
- checkout and purchase items within their account ("purchased"  items end up within their library)

### What I Learned
1. What to expect and how to better organize components needed in an app this size
2. Experience with lots of different hooks: useHistory, useState, useEffect etc.
3. Using different toolboxes such as: React Router and Redux
4. Combining and using different APIs (RAWG API was used as the base API, but was forced to use IGBD as well just for the game summaries. 
    - making a post request to yield credentials or other data instead of a GET
    - combining API calls with React hooks such as useEffect
    - How these calls link with helper functions and into the backend server
5. Firebase/Firestore
    - User Authentication
    - Realtime Database
6. Working and communicating with a backend (NodeJS, Express)
7. Really understanding and getting the hang of git and version control was necessary for a project of this size.

### Backend
In addition to these frontend interactions, a significant portion of time was used learning how a backend is used as well due to a cors blockage in my API calls.

### Built Using
1. React
2. Redux
3. CSS Modules
4. NodeJS / Express

## Design Work and Inspiration
Before touching code, I like to make use of a moodboard and design program like Adobe XD to plan my attack.

Here is the moodboard for this app: <img src="/readme-images/gamehub-moodboard.png" width="400">

Here is a link to view the design files within Figma: [GameHub Design Files](https://www.figma.com/file/sxAJKEb7drkmrgD90odU95/GameHub-Design-File)

## Features
GameHub asks visitors to sign up for an account upon entry so that a database can be created linked to their credentials.

<img src="/readme-images/action-images/gamehub-signin.png" width="400">

From there, many things can be done such as, viewing the home page and being greeted by a number of different games based on popularity, new releases, and best sellers. 

<img src="/readme-images/action-images/gamehub-home.png" width="400">


From there, many things can be done such as, viewing the home page and being greeted by a number of different games based on popularity, new releases, and best sellers. 

<img src="/readme-images/action-images/gamehub-game-detail.png" width="400">
<img src="/readme-images/action-images/gamehub-game-detail-similar-games.png" width="400">


The user can add the game to their wishlist or cart. Which they can later view within the wishlist tab or cart button. Any games viewed within the wishlist tab can be re-rendered, added to the cart, or removed from the list.

<img src="/readme-images/action-images/gamehub-wishlist.png" width="400">


The search tab allows the user to search for games by title, while the platform filter tab allows for the user to quickly search for games by platform, and further filter by genre. 

<img src="/readme-images/action-images/gamehub-search.png" width="400">
<img src="/readme-images/action-images/gamehub-platform-filter.png" width="400">


Within the cart, the user can purchase games (using the Stripe API), and upon pay completion, view and play games in their library 

<img src="/readme-images/action-images/gamehub-cart.png" width="400">
  

## Contact
