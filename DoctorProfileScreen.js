import React,{Component} from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';

const listItems = ['Bushra Javed','Sana Musharraf','Zunaira Ahmed','Khadija Mazahir Khan',
'Sumita Abrar','Hina Qazi','Shamama Haque','Salwa Imitiaz','Areej Iqbal','Rida e Zehra','Mahnoor Atiq',
'Aiman Izhar','Sunaina Asif']

class DoctorProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style = {styles.doctorName}>Bushra Javed</Text>
          <Text style = {styles.doctorEmail}>abc@hotmail.com</Text>
          <View style={styles.header}>
          <Text>Patients List</Text>
          <Text>Date: 8/07/2019</Text>
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

export default DoctorProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    paddingTop: 20
 
  },
  doctorName: {
    fontSize: 40,
    alignContent: 'center',
    textAlign: 'center'
  },
  doctorEmail: {
    fontSize: 20,
    alignContent: 'center',
    textAlign: 'center',
    fontStyle: 'italic'
  },
  listItems: {
    padding: 20,
    fontSize: 20
  },
  header: {
    alignContent: 'center',
    fontSize: 16,
    paddingTop: 20,
    justifyContent: 'center',
    textAlign: 'center'
  }
});
