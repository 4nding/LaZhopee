import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import menacc from '../../../assets/CATEGORIES/Mens Accessories.png';
import womenacc from '../../../assets/CATEGORIES/Womens Accessories.png';
import petacc from '../../../assets/CATEGORIES/Pets Accessories.png';

const Stack = createStackNavigator();

const CategoryScreen = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoryListScreen}
        options={{ headerLeft: null }}
      />
      <Stack.Screen name="Men" component={MenCategoryScreen} />
      <Stack.Screen name="Women" component={WomenCategoryScreen} />
      <Stack.Screen name="Pets" component={PetsCategoryScreen} />
    </Stack.Navigator>
  );
};

const CategoryListScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={() => navigation.navigate('Men')} style={styles.categoryContainer}>
        <Image source={menacc} style={styles.categoryIcon} />
        <Text style={styles.category}>Men</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Women')} style={styles.categoryContainer}>
        <Image source={womenacc} style={styles.categoryIcon} />
        <Text style={styles.category}>Women</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Pets')} style={styles.categoryContainer}>
        <Image source={petacc} style={styles.categoryIcon} />
        <Text style={styles.category}>Pets</Text>
      </TouchableOpacity>
    </View>
  );
};

const MenCategoryScreen = () => {
};

const WomenCategoryScreen = () => {
};

const PetsCategoryScreen = () => {
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
  },
  categoryContainer: {
    width: '25%',
    margin: 10,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50,
  },
  category: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CategoryScreen;
