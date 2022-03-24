import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './ProductCard.styles';
import {useContext} from 'react';
import ThemeContext from '../../../Contexts/ThemeContext';

const ProductCard = ({product}) => {
  const {theme} = useContext(ThemeContext);

  const img = product.image;
  let photos = '';
  img.forEach(i => {
    photos = i;
  });

  return (
    <View style={styles.shadow_container}>
      <View style={theme ? styles.container_dark : styles.container}>
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
            <Text
              testID="product-title"
              style={theme ? styles.title_dark : styles.title}>
              Graduation
            </Text>
            <Text
              testID="product-name"
              style={theme ? styles.name_dark : styles.name}>
              {product.name}
            </Text>
          </View>
          <View style={styles.inner_container}>
            <Text style={theme ? styles.text_dark : styles.text}>
              {product.listeners && 'Listeners:'}
              {product.listeners && product.listeners}
            </Text>
            <Text
              testID="product-playcount"
              style={theme ? styles.text_dark : styles.text}>
              PlayCount:{product.playcount}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
