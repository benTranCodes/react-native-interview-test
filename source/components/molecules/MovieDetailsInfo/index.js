import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { LabelledContent, Button } from "../../../components";
import { movieService } from "../../../services";

/**
 * Returns a styled component which displays details of a movie
 * @param {object} props.movie - Object of movie item
 * @param {(object) => void} props.onPress - Event handler for adding a movie to the cart
 * @param {object[]} props.cart - List of all movies currently added to the shopping cart
 */
const MovieDetailsInfo = (props) => {
  const { movie, onPress, cart } = props;
  const { image, title, date, price, genre, inventory } = movie;
  const isInCart = movieService.checkMovieInCart(movie, cart);
  const showAddToCart = !isInCart && inventory > 0;

  _handleAddMovieToCart = () => onPress(movie);

  return (
    <ScrollView style={styles.container}>
      <View>{image !== null && <Image source={{ uri: image }} style={styles.thumbnailImage} />}</View>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text>{genre}</Text>

        <View style={styles.titleSpacer} />

        <LabelledContent label={"Stock Level"} content={`${inventory} Remaining`} />
        <LabelledContent label={"Date"} content={date} />
        <LabelledContent label={"Price"} content={`$${price}`} contentStyles={styles.price} />
        <LabelledContent
          label={"Stock Level"}
          content={`${inventory} Remaining`}
          contentStyles={inventory === 0 && styles.stockStyles}
        />

        {showAddToCart && (
          <Button onPress={_handleAddMovieToCart} title="Add To Cart" styles={styles.checkoutWrapper} />
        )}
        {isInCart && (
          <View style={styles.alreadyInCartWrapper}>
            <Text style={styles.alreadyInCartText}>Already In Cart</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export { MovieDetailsInfo };
