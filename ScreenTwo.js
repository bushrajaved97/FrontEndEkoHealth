import React ,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';


class ScreenTwo extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.content}>
          <Text style={styles.logo}>Add A Patient</Text>
            <View style={styles.inputContainer}>
               <TextInput underlineColorAndroid='Transparent' style={styles.input} placeholder='Name'></TextInput>
               <TextInput underlineColorAndroid='Transparent' style={styles.input} placeholder='Email Address'></TextInput>
               <TextInput underlineColorAndroid='Transparent' style={styles.input} placeholder='Phone Number'></TextInput>
               <Button title='Submit'></Button>
            </View>
        </View> 
        
        
    
       

      </View>
    );
  }
}

export default ScreenTwo;

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowColor: '#252525',
    textShadowOffset: {weight:2 , height:2},
    textShadowRadius: 15,
    marginBottom: 20,

  },
  inputContainer: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  input: {
    fontSize: 16,
    height: 40,
    padding: 10,
    width: 300,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 15,
  },
  buttonContainer: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'black',
  }
});
