import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, Text, View, StyleSheet } from "react-native-web";

import Genres from "./Genres";

const Movie = ({
  adult,
  backdrop_path,
  genres,
  movies,
  original_language,
  original_title,
  overview,
  popularity,
  release_date
}) => {
  return (
    <View style={styles.app}>
      <Text style={styles.title}>{original_title}</Text>
      <Text style={styles.text}>Launched on: {release_date}</Text>
      <Genres genres={genres} movies={movies} />
      <Text style={styles.text}>{overview}</Text>
      <Text style={styles.text}>Rating: {popularity}</Text>
      <Text style={styles.text}>
        {adult === true ? `Adult zone` : `Open zone`}
      </Text>
      <Image
        accessibilityLabel="Movie image"
        source={{
          uri: `https://image.tmdb.org/t/p/w500${backdrop_path}`
        }}
        resizeMode="contain"
      />
      <Text style={styles.text}>Language: {original_language}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    margin: "1em"
  },
  text: {
    marginTop: ".5em",
    color: "rgba(255,255,255,0.6)"
  },
  title: {
    marginTop: ".5em",
    color: "rgba(255,255,255,0.6)",
    fontSize: "1.5em"
  }
});

Movie.propTypes = {
  adult: PropTypes.bool.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  movies: PropTypes.object.isRequired,
  original_language: PropTypes.string,
  original_title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  release_date: PropTypes.string.isRequired
};

export default Movie;
