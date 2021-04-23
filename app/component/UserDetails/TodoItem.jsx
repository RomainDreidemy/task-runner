import { Switch, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const TodoItem = ({ title, completed }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setIsCompleted(completed);
  }, []);

  return (
    <View
      style={
        isCompleted
          ? { ...styles.global.container, ...styles.completedYes.container }
          : { ...styles.global.container, ...styles.completedNo.container }
      }
    >
      <Text style={isCompleted ? styles.completedYes.text : styles.global.text}>
        {title.substring(0, 30)}
        {title.length > 30 ? '...' : ''}
      </Text>
      <Switch
        trackColor={{ false: '#E5E5E5', true: '#46AAF2' }}
        thumbColor={isCompleted ? '#fff' : '#fff'}
        ios_backgroundColor="#E5E5E5"
        onValueChange={(val) => setIsCompleted(val)}
        value={isCompleted}
      />
    </View>
  );
};

const styles = {
  global: {
    container: {
      height: 40,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      alignItems: 'center',
      borderBottomWidth: 1,
      // borderRadius: 5,
      borderColor: '#909090'
    },
    text: {
      color: '#909090'
    }
  },
  completedYes: {
    container: {
      // backgroundColor: '#79c194',
    },
    text: {
      color: '#909090',
      textDecorationLine: 'line-through'
    }
  },
  completedNo: {
    container: {
      // backgroundColor: '#e37885',
    }
  }
};

export default TodoItem;
