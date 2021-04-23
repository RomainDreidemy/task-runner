import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TodoItem from '../TodoItem';

const TodosSection = ({ todos, onOpenModal }) => {
  return (
    <View style={styles.todosSection}>
      <View style={styles.blockTitle}>
        <Text style={styles.title}>Todos</Text>
        <Ionicons name="add-sharp" size={30} onPress={() => onOpenModal()} />
      </View>
      <ScrollView style={{ maxHeight: 300 }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  todosSection: {
    flex: 3
  },
  blockTitle: {
    marginBottom: 15,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 20
  }
});

export default TodosSection;
