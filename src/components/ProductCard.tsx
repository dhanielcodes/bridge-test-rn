/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Colors from '../config/Colors';
import {screenWidth} from '../utils/Sizes';

interface ItemCard {
  title?: any;
  image?: string;
  desc?: any;
  amount?: string;
}

export default function ProductCard({
  title,
  image,
  desc,
  amount,
}: ItemCard): React.JSX.Element {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: '42%',
          borderRadius: 10,
          height: '42%',
        }}
      />
      <Text style={styles.text}>
        {title?.length > 19 ? `${title?.slice(0, 19)}...` : title}
      </Text>
      <Text style={styles.textDescription}>
        {desc?.length > 23 ? `${desc?.slice(0, 23)}...` : desc}
      </Text>
      <Text style={styles.textPrice}>#{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 16,
    width: '100%',
    height: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.DEFAULT_GREY,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    marginTop: 20,
    width: '100%',
  },
  textDescription: {
    fontFamily: 'Poppins-Light',
    fontSize: screenWidth(0.025),
    width: '100%',
  },
  textPrice: {
    fontFamily: 'Poppins-Medium',
    color: Colors.DEFAULT_YELLOW,
    width: '100%',
  },
});
