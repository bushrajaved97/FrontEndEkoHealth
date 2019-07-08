import React , {Component} from 'react';
import { StyleSheet, Text, View,Button, ImageBackground,TextInput } from 'react-native';

class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../images/background2.png')} style={styles.backgroundImage}>
          <View style={styles.content}>
          <Text style={styles.logo}>Sign Up</Text>
            <View style={styles.inputContainer}>
               <TextInput underlineColorAndroid='Transparent' style={styles.input} placeholder='Name'></TextInput>
               <TextInput underlineColorAndroid='Transparent' style={styles.input} placeholder='Email Address'></TextInput>
               <TextInput secureTextEntry={true} underlineColorAndroid='Transparent' style={styles.input} placeholder='Password'></TextInput>
               <TextInput secureTextEntry={true} underlineColorAndroid='Transparent' style={styles.input} placeholder='Confirm Password'></TextInput>
               <TextInput underlineColorAndroid='Transparent' style={styles.input} placeholder='Phone Number'></TextInput>
               <Button style={styles.buttonContainer} title='Submit' onPress={() => this.props.navigation.navigate('DrawerNavigator')} ></Button>
            </View>
        </View> 
        
        
       </ImageBackground>

      </View>
    );
  }
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center'
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    color: 'blue',
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
