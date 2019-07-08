import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SignOutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Signed Out Successfully! </Text>
      </View>
    );
  }
}

export default SignOutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
