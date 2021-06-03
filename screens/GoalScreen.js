import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Touchable, TouchableOpacity, Keyboard } from 'react-native';

export default function GoalScreen() {

  const [currentGoal, setCurrentGoal] = useState('');
  const [goals, setGoals] = useState([]);
  const [count, setCount] = useState(1);

  const styles = StyleSheet.create({
    root: {
      padding: 30
    },
    inputDiv: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    eachStyle: {
      height: 50,
      backgroundColor: '#2196f3',
      marginTop: 20,
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 10,
      alignItems: 'center'
    },
    header: {
      marginVertical: 0,
      backgroundColor: '#2196f3',
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
  });

  const handleChange = text => {
    setCurrentGoal(text);
  }

  const addGoal = () => {
    console.log('check')
    setCount(count + 1);
    setGoals(currentGoals => [...currentGoals, { id: count, text: currentGoal }])
    setCurrentGoal('')
    Keyboard.dismiss()
  }

  const deleteGoal = (index) => {
    console.log(`${index} should`)
    let newGoalList = goals.filter((goal) => goal.id !== index)
    setGoals(newGoalList)
  }

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>ToDo List</Text>
      </View>
      <View style={styles.root}>

        <View style={styles.inputDiv}>
          <TextInput style={{ width: '80%', borderBottomColor: 'black' }}
            placeholder="Enter Goal" onChangeText={handleChange} value={currentGoal} />
          <Button disabled={currentGoal.length === 0} title={'ADD'} onPress={addGoal} />
        </View>
        <ScrollView>
          {
            goals.map((goal, index) => {
              return (
                <TouchableOpacity onPress={deleteGoal.bind(this, goal.id)} key={index}>
                  <View style={styles.eachStyle}>
                    <Text style={{ color: 'white' }}>{`${index + 1}. ${goal.text}`}</Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
    </ScrollView>
  );
}
