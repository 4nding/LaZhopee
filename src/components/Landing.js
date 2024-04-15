import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import TFs2 from '../../assets/LOGO 1.png';

const Landing = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View><Image source={TFs2} styles={styles.logoheader}/></View>
           <Text style={styles.title}>LET'S GET STARTED </Text>
            <View style={styles.buttonsContainer}>
                <Button
                    icon="login"
                    mode="contained"
                    onPress={() => navigation.navigate('Login')}
                    style={styles.button}
                    labelStyle={styles.buttonLabel}
                >
                    Login
                </Button>
                <Button
                    icon="account-plus"
                    mode="contained"
                    onPress={() => navigation.navigate('Registration')}
                    style={styles.signupButton}
                    labelStyle={styles.buttonLabel}
                >
                    Sign-up
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
             
    },
    title: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'gray',
    },
    buttonsContainer: {
        width: '60%',
    },
    button: {
        paddingVertical: 8,
        borderRadius: 50,
        backgroundColor: 'red',
        marginBottom: 8,
    },
    signupButton: {
        marginTop: 10,
        paddingVertical: 8,
        borderRadius: 50,
        backgroundColor: 'orange',
    },
    buttonLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Landing
