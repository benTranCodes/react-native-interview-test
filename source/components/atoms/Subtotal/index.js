import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

/**
 * Returns a styled component containing the subtotal and a label
 * @param {number} props.subtotal - Total price of movies added up prior to tax
 */
const Subtotal = (props) => {
  const { subtotal } = props;

  console.log(subtotal);
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.subTotalLabel}>SUBTOTAL:</Text>
      <Text style={styles.subtotal}>{`$${subtotal}`}</Text>
    </View>
  );
};

export { Subtotal };
