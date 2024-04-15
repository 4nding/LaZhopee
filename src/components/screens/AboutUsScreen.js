import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Founder:</Text>
          <Text>Andre Vince Reganon</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Co-founder:</Text>
          <Text>Sam Syrille Tonggao</Text>
          <Text>Jomar Jenisan Yeri</Text>
        </View>

        <Text style={styles.sectionTitle}>Our System</Text>

        <Text style={styles.sectionText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc consequat interdum varius sit amet mattis vulputate. Mi in nulla posuere sollicitudin aliquam ultrices. Diam sit amet nisl suscipit adipiscing bibendum. Odio morbi quis commodo odio aenean sed. Egestas erat imperdiet sed euismod nisi porta. Viverra accumsan in nisl nisi. Quis hendrerit dolor magna eget est lorem. Velit aliquet sagittis id consectetur purus ut. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Sed vulputate odio ut enim blandit. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent.

Id nibh tortor id aliquet lectus. Euismod lacinia at quis risus. Nibh praesent tristique magna sit amet purus gravida. Consequat semper viverra nam libero justo. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Aliquet enim tortor at auctor urna nunc id cursus metus. Nisl tincidunt eget nullam non nisi est. Sed id semper risus in hendrerit gravida. Ultrices dui sapien eget mi proin. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc.
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    alignItems: 'flex-start',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 18,
    textAlign: 'left', 
  },
  sectionText: {
    textAlign: 'justify',
  },
});

export default AboutUsScreen;
