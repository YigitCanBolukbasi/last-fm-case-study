import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './ProductCard.styles';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image />
      <View>
        <View>
          <Text>Graduation</Text>
          <Text>{product.name}</Text>
        </View>
        <View>
          <Text>{product.listeners ? product.listeners : null}</Text>
          <Text>{product.playcount}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
