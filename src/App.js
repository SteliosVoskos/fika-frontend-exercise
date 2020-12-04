import React, { Component } from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import Movies from "./Movies";

const Container = styled.ScrollView`
  background-color: #032541;
`;
class App extends Component {
  render() {
    return (
      <Container>
        <Movies />
      </Container>
    );
  }
}

export default App;
