import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './ProductCard.styles';

const ProductCard = ({product}) => {
  const img = product.image;
  let photos = '';
  img.forEach(i => {
    photos = i;
  });

  return (
    <View style={styles.shadow_container}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={
            photos['#text']
              ? {
                  uri: photos['#text'],
                }
              : null
          }
        />
        <View style={styles.body_container}>
          <View style={styles.title_container}>
            <Text style={styles.title}>Graduation</Text>
            <Text style={styles.name}>{product.name}</Text>
          </View>
          <View style={styles.inner_container}>
            <Text style={styles.text}>
              {product.listeners && 'Listeners:'}
              {product.listeners && product.listeners}
            </Text>
            <Text style={styles.text}>PlayCount:{product.playcount}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
