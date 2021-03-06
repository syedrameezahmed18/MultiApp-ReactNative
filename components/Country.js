import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

export default function Country({ color }) {

    const [countryData, setCountryData] = useState([

    ]);
    const [url, setUrl] = useState('https://api.covid19api.com/summary')
    const [searchCountry, setSearchCountry] = useState('Pakistan')

    useEffect(() => {
        console.log(`useEffect fired`);
        let abortController = new AbortController();
        fetch(url, {
            signal: abortController.signal
        })
            .then(resp => resp.json())
            .then(data => {
                setCountryData(data.Countries)
            })
            .catch(err => {
                if (err.name === "AbortError") {
                    console.log('Aborted')
                }
                else {
                    console.log(err)
                }
            })

        //CleanUp function    
        return () => { abortController.abort() } //basically an inverse function to fetch in this case to abort/cleanup
        //data to prevent memory leak

    }, [url])
    //dependency array of useEffect in this case the useEffect will only run once the component is mounted and everytime
    //the url state changes

    const searchedCountry = (input) => {
        setSearchCountry(input);
    }


    const filteredCountry = countryData?.filter((country) => {
        return country.Country.toLowerCase().includes(searchCountry.toLowerCase())
    })


    const styles = StyleSheet.create({
        maintxt: {
            fontSize: 30,
            fontWeight: '700',
            color: 'black',
            textDecorationLine: 'underline',
        },
        root: {
            padding: 30,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        searchBar: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical: 15
        },
        inputBox: {
            borderWidth: 3,
            padding: 5,
            paddingLeft: 10,
            borderColor: 'black',
            margin: 10,
            width: '80%'
        },

        countryDiv: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        center: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical: 20,
            backgroundColor: color.purple,
            paddingHorizontal: 20,
            width: '100%',
            height: 300,
            paddingVertical: 10,
            borderRadius: 5
        },
        info: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',

            width: 300,
            height: '80%'
        },
        each: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            height: 60,
            margin: 3,
            marginTop: 5,
            width: 140
        },
        eachHeader: {
            fontSize: 16,
            fontWeight: '700',
            color: 'white'
        },
        eachTxt: {
            fontSize: 14,
            fontWeight: '600',
            color: 'white'
        },
        adjust: {
            fontSize: 16,
            fontWeight: '700',
            color: 'white',
            marginLeft: '-5%'
        }
    })

    console.log(filteredCountry.length);
    return (
        <View style={styles.root}>
            <Text style={styles.maintxt}>Search By Country</Text>
            <View style={{ width: '100%' }}>

                <View style={styles.searchBar}>
                    <TextInput placeholder="Country Name" style={styles.inputBox} value={searchCountry} onChangeText={searchedCountry} />
                    <TouchableOpacity>
                        <Icon
                            name="search"
                            type="font-awesome"
                            color="black"
                            size={36}
                        />
                    </TouchableOpacity>
                </View>

                {filteredCountry.length === 0 && (

                    <Text style={{ textAlign: 'center' }}>No Results Found</Text>

                ) || filteredCountry.length !== 0 && (

                    <View style={styles.countryDiv}>
                        {
                            filteredCountry?.map((theCountry, index) => {
                                return (
                                    <View key={index} style={styles.center}>
                                        <Text style={{ color: 'white', fontSize: 22, fontWeight: '600' }}>{theCountry.Country}</Text>
                                        <View style={styles.info}>
                                            <View style={styles.each}>
                                                <Text style={styles.eachHeader}>Total Confirmed</Text>
                                                <Text style={styles.eachTxt}>{theCountry.TotalConfirmed}</Text>
                                            </View>
                                            <View style={styles.each}>
                                                <Text style={styles.adjust}> Total Recovered</Text>
                                                <Text style={styles.eachTxt}>{theCountry.TotalRecovered}</Text>
                                            </View>
                                            <View style={styles.each}>
                                                <Text style={styles.eachHeader}>Total Deaths</Text>
                                                <Text style={styles.eachTxt}>{theCountry.TotalDeaths}</Text>
                                            </View>
                                            <View style={styles.each}>
                                                <Text style={styles.eachHeader}>New Confirmed</Text>
                                                <Text style={styles.eachTxt}>{theCountry.NewConfirmed}</Text>
                                            </View>
                                            <View style={styles.each}>
                                                <Text style={styles.eachHeader}>New Recovered</Text>
                                                <Text style={styles.eachTxt}>{theCountry.NewRecovered}</Text>
                                            </View>
                                            <View style={styles.each}>
                                                <Text style={styles.eachHeader}>New Deaths</Text>
                                                <Text style={styles.eachTxt}>{theCountry.NewDeaths}</Text>
                                            </View>


                                        </View>
                                    </View>
                                )
                            })

                        }
                    </View>)
                }
            </View>
        </View>
    )
}
