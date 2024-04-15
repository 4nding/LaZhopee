import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const AccountRecovery = ({ navigation }) => {
   
    return (
        <View style={styles.content}>
            <TextInput
                placeholder='Email'
                label='Email'
                style={styles.textInput}
            />
            <View style={styles.buttonsContainer}>
                <Button
                    icon="arrow-left"
                    mode="outlined"
                    onPress={() => navigation.navigate('Login')}
                    style={[styles.button, styles.backButton]}
                    labelStyle={styles.buttonLabel}
                >
                    Back to Login
                </Button>
                <Button
                    icon="account-check-outline"
                    mode="contained"
                    onPress={() => console.log('Recover Account pressed')}
                    style={[styles.button, styles.recoverButton]}
                    labelStyle={styles.buttonLabel}
                >
                    Recover Account
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 0.5,
        padding: 10,
        alignItems: 'center'
    },
    textInput: {
        marginTop: 20,
        width: "80%",
        maxWidth: '80%'
    },
    buttonsContainer: {
        width: '50%',
        marginTop: 20,
    },
    button: {
        paddingVertical: 8,
        borderRadius: 50,
        backgroundColor: 'red',
        marginBottom: 8,
        
    },
    recoverButton: {
        marginTop: 10,
        paddingVertical: 8,
        borderRadius: 50,
        backgroundColor: 'orange'
    },
    buttonLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default AccountRecovery
