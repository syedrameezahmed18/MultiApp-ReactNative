import React from 'react';
import { Touchable } from 'react-native';
import { View, Text, ButtoN, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen(props) {

    const styles = StyleSheet.create({
        mainApp: {
            padding: 40,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',

        },

        maintxt: {
            fontWeight: '700',
            fontSize: 24,
        },

        subtxt: {
            fontSize: 24,
            fontWeight: '600',
            marginVertical: 20
        },

        choices: {
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            width: '100%'
        },

        Cov: {
            height: 50,
            backgroundColor: '#9400D3',
            display: 'flex',
            flexDirection: 'column',
            padding: 10,
            justifyContent: 'center',
            borderRadius: 10
        },

        toDo: {
            height: 50,
            backgroundColor: '#2196f3',
            display: 'flex',
            flexDirection: 'column',
            padding: 10,
            justifyContent: 'center',
            borderRadius: 10
        },

        Exp: {
            height: 50,
            backgroundColor: 'green',
            display: 'flex',
            flexDirection: 'column',
            padding: 10,
            justifyContent: 'center',
            borderRadius: 10
        },

        innertxt: {
            color: 'white',
            fontWeight: '700'
        }
    })

    const Redirect = (input) => {
        props.navigation.navigate(input)
    }

    return (
        <View style={styles.mainApp}>
            <Text style={styles.maintxt}>Welcome to MultiApp</Text>
            <Text style={styles.subtxt}>Choose</Text>
            <View style={styles.choices}>
                <TouchableOpacity style={styles.Cov} onPress={Redirect.bind(this, 'Covid')}>
                    <Text style={styles.innertxt}>Covid Tracker</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toDo} onPress={Redirect.bind(this, 'Goal')}>
                    <Text style={styles.innertxt}>ToDo List</Text></TouchableOpacity>
                <TouchableOpacity style={styles.Exp}>
                    <Text style={styles.innertxt}>Expense Tracker</Text></TouchableOpacity>
            </View>
        </View>
    )
}
