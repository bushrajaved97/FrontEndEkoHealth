import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput,FlatList,ImageBackground } from 'react-native';
import ScreenTwo from './ScreenTwo';
import Icons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { State } from 'react-native-gesture-handler';


const listItems = ['Bushra Javed','Sana Musharraf','Zunaira Ahmed','Khadija Mazahir Khan',
'Sumita Abrar','Hina Qazi','Shamama Haque','Salwa Imitiaz','Areej Iqbal','Rida e Zehra','Mahnoor Atiq',
'Aiman Izhar','Sunaina Asif']


class ScreenOne extends Component {
  render() {
    return (
      <View style={styles.container}>
  
          <View style={styles.wrapper}> 
           <Animatable.View animation= "slideInRight"  style={styles.header}>
            <Icons name='ios-search' style={styles.searchbar}></Icons>
               <TextInput placeholder="Search" style={styles.searchText}></TextInput>
          </Animatable.View> 
         </View> 
         <View> 
             <FlatList
            
             data ={listItems}
             renderItem={({ item }) => <Text style={styles.listItems}>{item}</Text>}
             keyExtractor={(item,index) => index.toString()}
             ></FlatList>


          </View>
        
      </View>
    );
  }
}

export default ScreenOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  wrapper: {
    height: 80,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    paddingHorizontal: 5,
  
  },
  header: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  searchbar: {
    fontSize: 24,
  },
  searchText: {
    fontSize: 24,
    marginLeft: 15,
  },
  listItems: {
    padding: 20,
    fontSize: 20,
  }

});
