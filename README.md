# Movie Mafia  
**An app for movie enthusiasts powered by the TMDB API.**  
Movie Mafia is a full-stack project designed for users who love movies! It leverages the TMDB API to provide an interactive and engaging experience for exploring movies, actors, and reviews.  

## Technologies Used  
- **Express.js** – Backend framework  
- **EJS** – Templating engine  
- **Bootstrap** – UI styling  
- **Jest** – Testing framework  
- **TMDB API** – Fetching movie data  

## Prerequisites  
Ensure you have the following installed before running the project:  
- **Node.js**  
- **NPM**  

## Installation

Follow these steps to run the project on your local machine:

1. Clone the repository from GitHub

```bash
git clone https://github.com/lakshjethani/movie-mafia.git
``` 

2. Navigate to the project's root folder:

```bash
cd movie-mafia
``` 
3. Install the dependencies:

```bash
npm install
``` 

## Configuration

You can change the API_KEY in the .env file and the PORT number in the app.js file

## Usage
To run the project, follow these steps:

1. Start the server:

```bash
npm start
``` 
Open your web browser and navigate to http://localhost:8080 (or the specified port).

Alternatively, if you want to run it with nodemon for live reloading:
```bash
npm run dev
``` 

To test the project, follow these steps:

1. Run jest tests:

```bash
npm test
``` 

## Flow of the Project  

The goal of **Movie Mafia** is to leverage the [TMDB API](https://developer.themoviedb.org/) to provide users with an intuitive and engaging way to search for and explore their favorite movies.  

### Key Features  

- **Responsive Design**  
  - The application is fully **responsive** and works seamlessly on **mobile phones, tablets, and desktops**.  

- **Splash Screen**  
  - A welcome screen appears the first time a user visits the application.  
  - Uses `localStorage` to prevent the splash screen from appearing on subsequent visits.  

- **Home Screen**  
  - Displays multiple **movie cards**, each with a "Details" button for more information.  
  - Users can **search movies dynamically** or browse by genre.  
  - Sorting options are available within selected genres.  

- **Optimized Search Experience**  
  - Implemented **dynamic searching**, allowing real-time updates in the search box.  
  - Used **debounce** to reduce API call frequency, improving performance.  

- **Pagination**  
  - Implemented pagination to enhance performance and manage large datasets efficiently.  

- **Movie Details Page**  
  - Displays essential details such as **release date, overview, rating, cast, and reviews**.  
  - Reviews are initially shortened, with a "Read More" option for full access.  
  - Provides a list of **similar movies**, allowing users to explore related content.  

- **Actor Details Page**  
  - Clicking on a cast member’s **name or photo** opens their profile.  
  - Users can view **actor biographies and filmographies**.  
  - Movies from an actor's profile can be explored further via a "View Movie" button.  

- **Enhanced Navigation & UX**  
  - **Back Button** – Allows users to easily return to the previous page.  
  - **Loading Indicator** – Improves structure and enhances user experience by providing visual feedback.  

## Live Demo  
The project is temporarily hosted at: https://moviemafia-449720.wl.r.appspot.com/
