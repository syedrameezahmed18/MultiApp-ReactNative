import React from 'react'
import { View, TextInput, Modal, Text, Image, StyleSheet, ScrollView } from 'react-native'
import World from './../components/World.js'
import Country from './../components/Country.js'
import Colors from './../configs/colors'

const CovidScreen = () => {

    const styles = StyleSheet.create({
        header: {
            marginVertical: 0,
            backgroundColor: Colors.purple,
            height: 100,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },

        headerText: {
            color: Colors.white,
            fontSize: 26,
            fontWeight: '700',
            
        }
    })

    return (

        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerText}>Covid Tracker</Text>
            </View>
            <World color={Colors}/>
            <Country color={Colors}/>
        </ScrollView>
    )


}

export default CovidScreen;