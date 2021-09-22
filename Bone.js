import * as React from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class Bone extends React.Component{
  render(){
    return(
     
      <View style={styles.container}>
          <View style={styles.appTitle}>
              <View style={styles.appIcon}>
                  <Image source={require('../assets/bone-header.png')} style={styles.iconImage}></Image>
              </View>
              
          </View>
      
        </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{flex:1, justifyContent:'center', alignItems:'center'},
  appTitle: {flex: 0.07, flexDirection: 'row'},
  
  iconImage: {width: 320, height: 200, resizeMode: 'contain', marginLeft: 10, marginTop:-98, paddingLeft: 100, },

})

