import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './ProductStyle';


const Product = ({product_data}) => {
  return(
    <View style={styles.product_wrapper}>
      <View style={styles.product_image_wrapper}>
        <Image source={{uri: product_data.imgURL}} style={styles.product_image} />
      </View>
      <View style={styles.product_info}>
        <Text numberOfLines={2} style={styles.product_title}>{product_data.title}</Text>
        <Text style={styles.product_price}>{product_data.price}</Text>
        {!product_data.inStock ? <Text style={styles.product_instock}>Tükendi</Text> :''}
      </View>
    </View>
  )
}

export default Product;