import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

const Todo_Items = ({ id, text, completed, onDelete, onToggle, onStartEditing }) => {
    const handleToggle = () => {
      onToggle(id);
    };
  
    const handleEdit = () => {
      onStartEditing(id, text);
    };
  
    return (
      <View style={styles.todo}>
        <Text style={[styles.todoText, completed && styles.completed]}>
          {text}
        </Text>
        <View style={styles.buttonsContainer}>
        <Button
          title={completed ? 'Undo' : 'Done'}
          onPress={handleToggle}
        />
        <Button title="Edit" onPress={handleEdit} />
        <Button title="Delete" onPress={() => onDelete(id)} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    
    todo: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    todoText: {
      fontSize: 18,
      flex: 1,
    },
    completed: {
      textDecorationLine: 'line-through',
    },
    buttonsContainer: {
      flexDirection: 'row',
    },
  });

export default Todo_Items;