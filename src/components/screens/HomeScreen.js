import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Topup from '../../../assets/HOME/Top Up.png';
import Mall from '../../../assets/HOME/LaZhopee Mall.png';
import Voucher from '../../../assets/HOME/Voucher.png';
import Image1 from '../../../assets/FAV/Brave.jpg';
import Image2 from '../../../assets/FAV/Coffee 2.jpg';
import Image3 from '../../../assets/FAV/Faith.jpg';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  // Define a fixed size for the images
  const imageSize = 100;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigateToScreen('HistoryScreen')} style={styles.imageWrapper}>
          <Image
            source={Topup}
            style={[styles.image, { width: imageSize, height: imageSize }]}
            resizeMode="contain"
          />
          <Text style={styles.categoryText}>Topup</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('BiologyScreen')} style={styles.imageWrapper}>
          <Image
            source={Voucher}
            style={[styles.image, { width: imageSize, height: imageSize }]}
            resizeMode="contain"
          />
          <Text style={styles.categoryText}>LaZhopee Mall</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen('OtherScreen')} style={styles.imageWrapper}>
          <Image
            source={Mall}
            style={[styles.image, { width: imageSize, height: imageSize }]}
            resizeMode="contain"
          />
          <Text style={styles.categoryText}>Voucher</Text>
        </TouchableOpacity>
        
        <Text style={styles.flashSaleText}>Flash Sale</Text>

        <View style={styles.additionalItemsContainer}>
          <TouchableOpacity onPress={() => navigateToScreen('Screen1')} style={styles.imageWrapper}>
            <Image
              source={Image1}
              style={[styles.image, { width: imageSize, height: imageSize }]}
              resizeMode="contain"
            />
            <Text style={styles.categoryText}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigateToScreen('Screen2')} style={styles.imageWrapper}>
            <Image
              source={Image2}
              style={[styles.image, { width: imageSize, height: imageSize }]}
              resizeMode="contain"
            />
            <Text style={styles.categoryText}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigateToScreen('Screen3')} style={styles.imageWrapper}>
            <Image
              source={Image3}
              style={[styles.image, { width: imageSize, height: imageSize }]}
              resizeMode="contain"
            />
            <Text style={styles.categoryText}>3</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  imageWrapper: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    marginBottom: 10,
    borderWidth: 0,
    borderColor: '#ccc',
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
    color: '#333',
    fontWeight: 'bold',
  },
  flashSaleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'red',
  },
  additionalItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    
  },
});

export default HomeScreen;
