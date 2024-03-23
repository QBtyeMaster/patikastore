import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  product_wrapper: {
    flex: 1,
    backgroundColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    height: Dimensions.get('window').height / 3
    
  },
  product_image_wrapper: {
    flex:2,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 5,
    borderRadius: 10,
  },
  product_image: {
    width: '100%',
    height: 160,
    resizeMode: 'contain',
    
  },
  product_info: {
    flex:1,
    
    justifyContent: 'space-between',
    paddingVertical: 0
  },
  product_title: {
    width: '100%',
    overflow: 'hidden',
    flexWrap: 'nowrap',
    fontSize: 16, 
    fontWeight: '700',
    
  },
  product_price: {fontSize: 16},
  product_instock: {opacity: 0.5}
})