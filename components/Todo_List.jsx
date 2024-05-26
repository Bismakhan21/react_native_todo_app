import React from 'react';
import { View } from 'react-native';
import Todo_Items from './Todo_Items';

const Todo_List = ({ todos, onDelete, onToggle, onStartEditing }) => {
    return (
      <View>
        {todos.map(todo => (
          <Todo_Items
            key={todo.id}
            {...todo}
            onDelete={onDelete}
            onToggle={onToggle}
            onStartEditing={onStartEditing}
          />
        ))}
      </View>
    );
  }; 

  export default Todo_List;