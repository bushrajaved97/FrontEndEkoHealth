import React , {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator,AsyncStorage } from 'react-native';

class AuthLoadingScreen extends Component {

    constructor(){
        super()
        this.laodApp()
    }

    laodApp = async() =>{
        const userToken = await AsyncStorage.getItem('userToken')

        this.props.navigation.navigate(userToken? 'App':'Auth')
    }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
