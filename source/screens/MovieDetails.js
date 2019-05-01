import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../ducks/movies";
import { MovieDetailsInfo } from "../components";

class MovieDetails extends Component {
  _handlePress = (movie) => {
    const { addToCart } = this.props;
    addToCart(movie);
  };

  render() {
    const { details } = this.props;

    return (
      <View>
        <MovieDetailsInfo movie={details} onPress={this._handlePress} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const mapStateToProps = (state) => ({
  details: state.movies.details,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
