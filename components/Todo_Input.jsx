import React from 'react';
import { View, Button,  TextInput,StyleSheet } from 'react-native';

const Todo_Input = ({ value, onChangeText, onSubmit }) => {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder="Enter a todo..."
          onSubmitEditing={onSubmit}
        />
        <Button title="Add Item" onPress={onSubmit} />
      </View>
    );
  }; 

  const styles = StyleSheet.create({
    
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        flex: 1,
        marginRight: 10,
        paddingHorizontal: 10,
      }

})

  export default Todo_Input;