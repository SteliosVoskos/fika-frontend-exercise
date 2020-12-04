# Stelios' notes

Fika asked for a movie app, called FikaSearch, which is a react-native app for listing movies from the movie db API. Fika asked me to spend no more than an hour on the project and to write down the next steps when the time is up. I have completed technical assessment in 57 minutes. Here is a breakdown of how much time I've spent on each component/function:
- Project setup: 8 minutes
- Genre component: 7 minutes
- findGenres util function: 10 minutes
- Movie component: 15 minutes
- Movies component: 10 minutes,
- Basic styling: 7 minutes

Main challenge: During the implementation I wasn't able to fetch the images from the movies. The `Image` component from React Native and the uri are in the `Movie` component for your consideration.

Next steps:
<ul>
    <li>Define a state management system (Redux or something similar). At the moment, the app is using the component's internal state to manage state changes.</li>
    <li>Styling - The app needs more styling in order to stand out. At the moment, the styling is very basic.</li>
    <li>From a UI/UX perspective, the app is missing a few basic elements, such as the ability to search and to click on a movie to view more details.</li>
    <li>The components need to be in a `component` directory</li>
    <li>As the app grows, it will need a Router, such as `React-router`.</li>
    <li>The project needs a bundler, such as webpack. Webpack is going to do futher optimisations in our bundle size, it will help us with our production build, manage the app assets better, provide useful plugins for the app and provide better debugging tools.</li>
</ul>


# FikaSearch Exercise

The objective of this exercise is to fork this repository and create a `react-native` app called 'FikaSearch'. This app will comprise of a listing page of films and the names of their genres.

You have an hour to complete this. We don't expect you to complete the exercise but we do expect you to have an understandable structure, clean code, and to be able to describe your next steps.

## Technical details

### API
You will need to use the following URLs to fetch the films and genres from `the movie db` API:

movies - [https://api.themoviedb.org/3/movie/now_playing?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1](https://developers.themoviedb.org/3/movies/get-now-playing)

genres - [https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US](https://developers.themoviedb.org/3/genres/get-movie-list)

#### Images

The API will provide part of the image url via the `poster_path` field of each film. It must be combined with the base image path `https://image.tmdb.org/t/p/w500/`

**Have fun!**
