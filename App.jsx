// import React, { useState } from 'react';
// import {Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

// const App = () => {
//   const [text, setText] = useState(true);

//   return <>
//   <View>
//     <View>
//       <TextInput
//       style={styles.input}
//       setText={setText}
//       value={text}
//       placeholder='Enter your list here...'
//       />
//       <TouchableOpacity style={styles.button}>
//         <Text>Press Here</Text>
//       </TouchableOpacity>
    
//       {/* <Button
//       title="Press me"
//       onPress={() => Alert.alert('Simple Button pressed')}
//       style={styles.buttonStyle}>
//         Add items
//       </Button> */}
//     </View>

//     <Text>Hello, I am your cat!</Text>
//   </View>
    
//     </>
// };

// export default App;


// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },

//   button: {
//     color: 'red',
//     marginTop: 20,
//     padding: 20,
//     marginHorizontal:15,
//     backgroundColor: 'blue'
// }
// });

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Todo_Input from './components/Todo_Input';
import Todo_List from './components/Todo_List';
import Todo_Items from './components/Todo_Items';


export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);

  const addTodo = () => {
    if (text.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
      setText('');
    }
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setText(text);
  };

  const updateTodo = () => {
    setTodos(
      todos.map(todo =>
        todo.id === editingId ? { ...todo, text } : todo
      )
    );
    setEditingId(null);
  };

  return (
    <View style={styles.container}>
      <Todo_Input
        value={text}
        onChangeText={setText}
        onSubmit={addTodo}
      />
      <Todo_List
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onStartEditing={startEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  // inputContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginBottom: 20,
  // },
 
  // completed: {
  //   textDecorationLine: 'line-through',
  // },
  // buttonsContainer: {
  //   flexDirection: 'row',
  // },
});