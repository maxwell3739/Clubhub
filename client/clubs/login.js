import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Button,
  Image,
} from 'react-native';
import styles from '../style.js'
import { StackNavigator } from 'react-navigation';

class LoginClub extends React.Component {
  constructor() {
    super();
      this.state={
        clubName: '',
        password: '',
        message: ''
      };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.center}>
          <Image
            source={require('../assets/icons/ch_logo.png')}
            style={styles.imageSmall}
          ></Image>
          <TextInput
            style={styles.inputField}
            placeholder='Club Name'
            onChangeText={(text) => this.setState({clubName: text})}
            value={this.state.username}
            >
          </TextInput>
          <TextInput
            style={styles.inputField}
            placeholder='Password'
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            secureTextEntry={true}
            message=''
            >
          </TextInput>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => {
              fetch('http://835c0bdc.ngrok.io/api/users/loginclub', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                          clubName: this.state.clubName,
                          password: this.state.password,
                        })
                      })
                      .then((response) => response.json())
                      .then((responseJson) => {
                        if (responseJson.success) {
                          console.log('success')
                          this.props.navigation.navigate('HomeClub')
                        }
                        else {
                          console.log('hello')
                          this.setState({message: responseJson.error})
                        }
                      })
                        .catch((err) => {
                          console.log('error', err)
                      })
             }}
            >
            <Text style={styles.buttonLabel}> Login </Text>
          </TouchableOpacity>
          <Text style={styles.textSmall} >{this.state.message}</Text>
        </View>
        <View style={styles.footer}>
        </View>
      </View>
    )
  }
}

export default LoginClub
