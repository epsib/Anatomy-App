import * as React from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import Lottie from 'react-lottie';
import animationData from '../assets/brain.json';

class UncontrolledLottie extends React.Component{
   render(){
    const defaultOptions = {
     loop:true,
     autoplay:true,
     animationData: animationData,
     rendererSettings: {
       preserveAspectRatio: 'xMidYMid slice'
     },
    };

    return(
      <View style={styles.container}>
          <View style={styles.appTitle}>
              <View style={styles.appIcon}>
                  <Lottie options={defaultOptions}
                  height={400}
                  width={400}
                  
                  />
              </View>
              
          </View>
      
        </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{flex:1, justifyContent:'center', alignItems:'center'},
  appTitle: {flex: 0.07, flexDirection: 'row'},
  appIcon:{ flex:0.2, justifyContent: 'center', alignItems:'center'},
  iconImage: {width: 100, height: 100, resizeMode: 'contain'},
  appTitleTextContainer: {flex: 0.8, justifyContent: 'center'},
  appTitleText:{ color: 'black', fontSize: 28},

})

export default UncontrolledLottie;