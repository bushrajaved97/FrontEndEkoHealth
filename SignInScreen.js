import React , {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class SignInScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <text style={styles.logo}>Health Communicator</text>
        </View>


        <Button title='CompleteLogin' onPress={() => this.props.navigation.navigate('DrawerNavigator')} ></Button>

      </View>
    );
  }
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

  }
});
