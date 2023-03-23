# Feature-Flicks---The-Cinema-
Every page on the website utilizes multiple components in order to make the code a lot more readable and understandable. 
The navbar component is used by all pages on the website. The navbar component is imported and called in the Layout.jsx page.
Layout.jsx wraps all pages. 

The screenings page utilizes the screening component. This component defines the structure for each card on the screenings page.
Similarly, the movies page utilizes a movie component which also contain the card structure for each movie displayed on the movies page.

From the screenings and movies page props are passed to the components. These include things such as the movie poster, title, date, length, etc.
