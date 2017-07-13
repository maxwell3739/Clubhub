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
import styles from './style.js'
import { StackNavigator } from 'react-navigation';

import RegisterClub from './clubs/register'
import LoginClub from './clubs/login'
import HomeClub from './clubs/homescreen'

class Splash extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <View style={styles.center}>
          <Image
            source={require('./assets/icons/ch_logo.png')}
            style={styles.imageSmall}
          ></Image>
          <TouchableOpacity style={[styles.button, styles.buttonGreen]}
            onPress={() => (this.props.navigation.navigate('LoginClub'))}>
            <Text style={styles.buttonLabel}>Login as Club</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonGreen]}
            onPress={() => (this.props.navigation.navigate('HomeClub'))}>
            <Text style={styles.buttonLabel}>Login as Student</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonGreen]}
            onPress={() => (this.props.navigation.navigate('RegisterClub'))}>
            <Text style={styles.buttonLabel}>Register as Club</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]}>
            <Text style={styles.buttonLabel}>Register as Student</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
        </View>
      </View>
    );
  }
}

export default StackNavigator({
  Splash: {screen: Splash},
  LoginClub: {screen: LoginClub},
  RegisterClub: {screen: RegisterClub},
  HomeClub: {screen: HomeClub},
}, {initialRouteName: 'Splash'});
