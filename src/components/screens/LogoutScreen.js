import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';

const LogoutScreen = ({ navigation }) => {
    const handleLogout = () => {

      
        navigation.navigate('Landing');
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.message}>Confirm Logout</Text>
            <Button
                mode="contained"
                onPress={handleLogout}
                style={styles.button}
                labelStyle={styles.buttonLabel}
            >
                Log Out
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    message: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        borderRadius: 8,
        width: 150,
        backgroundColor: 'red',
    },
    buttonLabel: {
        fontSize: 16,
    },
});

export default LogoutScreen;
