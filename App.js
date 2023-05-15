import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, Keyboard } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [task, setTask] = useState([]); //guarda a lista de tarefas, por isso um array
  const [newTask, setNewTask] = useState(""); //recebe uma nova tarefa alimentada pelo input

  async function addTask() {
    setTask([...task, newTask]);
    setNewTask('');

    Keyboard.dismiss();
  }

  return (
  <>
    <View style={styles.container}>
      <View style={styles.Body}>
        <Text>TO DO LIST</Text>
      </View>
      <View style={styles.Form}>
        <TextInput 
          style={styles.Input}
          placeholder="Adicione uma tarefa"
          autoCorrect={true}
          maxLength={25}
          onChangeText={text => setNewTask(text)}
          value={newTask}
        />
        
        <TouchableOpacity style={styles.Button} onPress={() => addTask()}>
        <AntDesign name="plus" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlatList style={styles.FlatList}
          data={task}
          keyExtractor={item => item.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.ContainerView}>
              <Text style={styles.Texto}>{item}</Text>
              <TouchableOpacity >
                <MaterialIcons 
                  name='delete-forever'
                  size ={25}
                  color='#f64c75'
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
  },
  Body: {
    //flex: 1,
  },
  Form: {
    padding: 0,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: '#eee', 
  },
  Input: {
    flex: 1,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#eee'
  },
  Button:{
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c6cce',
    borderRadius: 4,
    marginLeft: 10,
  },
  FlatList:{
    flex: 1,
    marginTop: 5,
  },
  ContainerView: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    backgroundColor: '#eee',

    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#eee',
  },
  Texto: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 4,
  }

  
  }
);

