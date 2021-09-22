import * as React from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';


export default class HomeScreen extends React.Component{

render(){
  return(
    <View style={styles.container}>
     <View style={styles.appTitle}>
              <View style={styles.appIcon}>
                  <Image source={require('../assets/logo.png')} style={styles.iconImage}></Image>
              </View>
              <View style={styles.appTitleTextContainer}>
                  <Text style={styles.appTitleText}>Human Anatomy</Text>
              </View>
          </View>
      <View> 
        
         <Image source={require('../assets/body.png')} style={{marginTop: 50}}/>
        
      </View>
      <View style={{flexDirection: 'row', flex:0.07, }}>
       <TouchableOpacity style={{paddingRight: 10}}
            onPress={()=>{this.props.navigation.navigate('Brain')}}>
           <Image source={require('../assets/brain.png')} style={{width:50, height: 50, marginTop: 20}}/>
      </TouchableOpacity>
      <View>
       <TouchableOpacity style={{paddingRight: 10}} onPress={()=>{this.props.navigation.navigate('Heart')}}>
           <Image source={require('../assets/heart.png')} style={{width:50, height: 50, marginTop: 20,}}/>
      </TouchableOpacity>
    
    </View>
     <TouchableOpacity style={{paddingRight: 10}} onPress={()=>{this.props.navigation.navigate('Lungs')}}>
           <Image source={require('../assets/lungs.png')} style={{width:50, height: 50, marginTop: 20,}}/>
      </TouchableOpacity>
       <TouchableOpacity style={{paddingRight: 10}} onPress={()=>{this.props.navigation.navigate('Bone')}}>
           <Image source={require('../assets/femur.png')} style={{width:50, height: 50, marginTop: 20,}}/>
      </TouchableOpacity>
       <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Stomach')}}>
           <Image source={require('../assets/stomach.png')} style={{width:50, height: 50, marginTop: 20,}}/>
      </TouchableOpacity>
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