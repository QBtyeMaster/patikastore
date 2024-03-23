import React from 'react';
import { SafeAreaView, FlatList, Text, View, StyleSheet} from 'react-native';
import Product from './components/Product';
import Header from './components/Header';
import ProductData from './product.json';

const App = () => {

  const ProductItems = ({item}) => <Product product_data={item} />
  return(
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
      style={styles.flatlist}
      data={ProductData}
      renderItem={ProductItems}
      numColumns={2}
      />
    </SafeAreaView>
  )

  




}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe' 
    
  },
  flatlist: {
    margin: 10
  }

})


export default App;
