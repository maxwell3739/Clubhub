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

class HomeClub extends React.Component {
  constructor() {
    super();
      this.state={
        username: '',
        password: ''
      };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <View style={styles.center}>
          <Image
            source={require('../assets/icons/ch_logo.png')}
            style={styles.imageSmall}
          ></Image>
            <Text style={{fontFamily: 'Arial'}}> Commerce Student Society </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/calender.png')}
              style={styles.imageThumb}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/user.png')}
              style={styles.imageThumb}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/receipt.png')}
              style={styles.imageThumb}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default HomeClub
