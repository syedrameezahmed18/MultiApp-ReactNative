import React, {useState, useEffect, useContext, createContext} from 'react'
import { Animated, View, Text, StyleSheet } from 'react-native'
import Card from './Card.js'



export default function World() {

    const [data, setData] = useState({
      
    })
   

    useEffect(()=>{

        fetch('https://api.covid19api.com/world/total')
            .then(resp => resp.json())
                .then(info => {
                    setData(info);
                })

        
    },[])

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
            flexDirection:'column',
            justifyContent:'space-around',
            alignItems:'center',
            marginTop:20
        }
    })

    return (
        <View style={styles.root}>
            <Text style={styles.heading}>World Data</Text>

            <View style={styles.cardContainer}>
                <Card
                    iconName={'heartbeat'}
                    iconSeries={'font-awesome'}
                    color={'white'}
                    backColor={'lightblue'}
                    cardTitle={'Total Cases'}
                    cardValue={data?.TotalConfirmed || 0}
                />
                <Card
                    iconName={'book'}
                    iconSeries={'font-awesome'}
                    color={'white'}
                    backColor={'red'}
                    cardTitle={'Total Deaths'}
                    cardValue={data?.TotalDeaths || 0}
                />
                <Card
                    iconName={'medkit'}
                    iconSeries={'font-awesome'}
                    color={'white'}
                    backColor={'green'}
                    cardTitle={'Total Recoveries'}
                    cardValue={data?.TotalRecovered || 0}
                />
            </View>
        </View>
    )
}
