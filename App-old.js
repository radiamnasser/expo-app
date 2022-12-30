import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get('window').width,
  windowHeight = Dimensions.get('window').height;

export default class App extends React.Component {

  render() {

    return (

      <ScrollView>

      <View style={styles.container}>
        <Text style={styles.text}>wellcom to the ......1!</Text>
        <Image
          source={require("./assets/lavande.jpeg")}
          /*style={{width: windowWidth, resizeMode: 'contain'}}*/
          style={[{ resizeMode: 'contain' }, styles.image]}
        />
        
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>wellcom to the ...... 2!</Text>
        <Image
          source={require("./assets/lavande.jpeg")}
          /*style={{width: windowWidth, resizeMode: 'contain'}}*/
          style={[{ resizeMode: 'contain' }, styles.image]}
        />
       
      </View>

      <StatusBar style="auto" />

      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    /*flex: 1,*///repartition de contenu dynamique
    height: windowHeight/2,
    backgroundColor: '#025418',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white'
  },

  image: {
    height: 200
  }


});
