import React, { useState, useEffect, useContext, createContext } from 'react'
import { Animated, View, Text, StyleSheet, ScrollView } from 'react-native'
import Card from './Card.js'
import Spinner from 'react-native-loading-spinner-overlay';



export default function World({color}) {

    const [data, setData] = useState({

    })

    const [spinner, setSpinner] = useState(false);


    useEffect(() => {
        setSpinner(true);
        fetch('https://api.covid19api.com/world/total')
            .then(resp => resp.json())
            .then(info => {
                setData(info);
                setSpinner(false);
            })
            .catch(err => {
                console.log(err)
                setSpinner(false);
            })


    }, [])

    console.log(data)

    const styles = StyleSheet.create({
        root: {
            padding: 30,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',

        },
        heading: {
            fontSize: 30,
            fontWeight: '700',
            color: 'black',
            textDecorationLine: 'underline',

        },
        cardContainer: {
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 20
        },
        spinnerTextStyle: {
            color: '#FFF'
        },
        container: {
            display:'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
           
        },
    })

    return (
        <ScrollView>
            {   spinner && (
                <View style={styles.container}>
                    <Spinner
                        visible={spinner}
                        textContent={'Loading ...'}
                        textStyle={styles.spinnerTextStyle}
                        cancelable={true}
                        size='large'
                    />
                </View>
            ) ||
                !spinner && (
                    < View style={styles.root}>
                        <Text style={styles.heading}>World Data</Text>

                        <View style={styles.cardContainer}>
                            <Card
                                iconName={'heartbeat'}
                                iconSeries={'font-awesome'}
                                color={color.white}
                                backColor={'lightblue'}
                                cardTitle={'Total Cases'}
                                cardValue={data?.TotalConfirmed || 0}
                            />
                            <Card
                                iconName={'book'}
                                iconSeries={'font-awesome'}
                                color={color.white}
                                backColor={'red'}
                                cardTitle={'Total Deaths'}
                                cardValue={data?.TotalDeaths || 0}
                            />
                            <Card
                                iconName={'medkit'}
                                iconSeries={'font-awesome'}
                                color={color.white}
                                backColor={color.green}
                                cardTitle={'Total Recoveries'}
                                cardValue={data?.TotalRecovered || 0}
                            />
                        </View>
                    </View>
                )
            }
        </ScrollView >
    )
}
