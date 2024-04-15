import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

import Brave from  '../../../assets/FAV/Brave.jpg';
import coffee1 from  '../../../assets/FAV/Coffee 2.jpg';
import coffee from  '../../../assets/FAV/Coffee.jpg';
import faith from '../../../assets/FAV/Faith.jpg';
import ttmb from '../../../assets/FAV/TTMB.jpg';

const FavoritesScreen = () => {
  
  const favoriteItems = [
    { id: '1', name: 'Brave Tshirt', image: Brave},
    { id: '2', name: 'Coffee 2 Tshirt', image: coffee },
    { id: '3', name: 'Coffee Tshirt', image: coffee1 },
    { id: '4', name: 'Faith Tshirt', image: faith },
    { id: '5', name: 'TTMB Tshirt', image: ttmb },
  ];

  
  const renderFavoriteItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Favorites</Text>
      <FlatList
        data={favoriteItems}
        renderItem={renderFavoriteItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
  },
  itemImage: {
    width: 200, // Increase the image width
    height: 200, // Increase the image height
    borderRadius: 10,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Align the text to the center
  },
});

export default FavoritesScreen;
