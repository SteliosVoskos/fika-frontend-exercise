import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native-web";

import findGenres from "./utils";

const Genres = ({ genres, movies }) => {
  const movieGenres = findGenres(genres, movies);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category:</Text>
      {movieGenres.map((genre, index) => (
        <Text key={index} style={styles.text}>
          {genre}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row"
  },
  text: {
    color: "rgba(255,255,255,0.6)",
    marginRight: ".5em",
    marginTop: ".5em"
  }
});

Genres.propTypes = {
  genres: PropTypes.array.isRequired,
  movies: PropTypes.object.isRequired
};

export default Genres;
