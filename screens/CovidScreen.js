import React from 'react'
import { View, TextInput, Modal, Text, Image, StyleSheet, ScrollView } from 'react-native'
import World from './../components/World.js'
import Country from './../components/Country.js'

const CovidScreen = () => {

    const styles = StyleSheet.create({
        header: {
            marginVertical: 0,
            backgroundColor: '#9400D3',
            height: 100,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },

        headerText: {
            color: 'white',
            fontSize: 26,
            fontWeight: '700',
            
        }
    })

    return (

        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerText}>Covid Tracker</Text>
            </View>
            <World />
            <Country />
        </ScrollView>
    )


}

export default CovidScreen;