import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native-web";

import Movie from "./Movie";

export default class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      themes: [],
      themesAreLoading: true,
      hasErrored: false,
      moviesAreLoading: true,
      movies: null
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          hasErrored: false,
          themes: data.genres,
          themesAreLoading: false
        });
      })
      .catch((error) => {
        this.setState({
          hasErrored: true,
          themes: [],
          themesAreLoading: false
        });
        return error;
      });
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          hasErrored: false,
          movies: data,
          moviesAreLoading: false
        });
      })
      .catch((error) => {
        this.setState({
          hasErrored: true,
          movies: null,
          moviesAreLoading: false
        });

        return error;
      });
  }

  renderMovies() {
    return this.state.movies.results.map((movie) => (
      <Movie
        key={movie.id}
        {...movie}
        genres={this.state.themes}
        movies={movie}
      />
    ));
  }

  render() {
    const { movies } = this.state;
    if (movies === null) {
      return null;
    } else {
      return (
        <View>
          <View style={styles.datesContainer}>
            <Text style={styles.dates}>
              Premiering movies from {this.state.movies.dates.minimum} until{" "}
              {this.state.movies.dates.minimum}
            </Text>
          </View>
          {this.renderMovies()}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  datesContainer: {
    padding: "1em"
  },
  dates: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "1.4em"
  }
});
