import React, { useState, useEffect } from 'react';
import { Touchable } from 'react-native';
import { View, Text, ButtoN, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import {TransactionProvider} from '../TransactionContext'

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
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: 10,
            paddingLeft: 20
        },

        toDo: {
            height: 50,
            backgroundColor: '#2196f3',
            display: 'flex',
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: 10,
            paddingLeft: 15
        },

        Exp: {
            height: 50,
            backgroundColor: 'green',
            display: 'flex',
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: 10,
            paddingLeft: 12
        },

        innertxt: {
            color: 'white',
            fontWeight: '700',
            marginLeft: 15,
            fontSize: 18
        },

        innertxt2: {
            color: 'white',
            fontWeight: '700',
            marginLeft: 12,
            fontSize: 18
        },

        innertxt3: {
            color: 'white',
            fontWeight: '700',
            marginLeft: 10,
            fontSize: 18
        }
    })

    const Redirect = (input) => {
        props.navigation.navigate(input)
    }

    return (
        <TransactionProvider>
            <View style={styles.mainApp}>

                <Text style={styles.maintxt}>Welcome to MultiApp</Text>
                <Text style={styles.subtxt}>Choose</Text>
                <View style={styles.choices}>
                    <TouchableOpacity style={styles.Cov} onPress={Redirect.bind(this, 'Covid')}>
                        <Icon
                            name="thermometer-empty"
                            type="font-awesome"
                            color="white"
                            size={32}
                        />
                        <Text style={styles.innertxt}>Covid Tracker</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.toDo} onPress={Redirect.bind(this, 'Goal')}>
                        <Icon
                            name="sticky-note-o"
                            type="font-awesome"
                            color="white"
                            size={32}
                        />
                        <Text style={styles.innertxt2}>ToDo List</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.Exp} onPress={Redirect.bind(this, 'Tracker')}>
                        <Icon
                            name="money"
                            type="font-awesome"
                            color="white"
                            size={32}
                        />
                        <Text style={styles.innertxt3}>Expense Tracker</Text></TouchableOpacity>
                </View>

            </View>
        </TransactionProvider>
    )
}
