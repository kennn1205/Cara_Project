import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import React from 'react'
import font from '../../styles/font';


const LoadingScreen = () => {
  return (
    <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
  
      <Image
        style={{width: 145, height: 31,marginTop:170}}
        source={require('../assets/images/Caralogo.png')}
      />
      <Text
        style={{
          fontSize: 30,
          fontFamily: font.bold,
          color: '#315CAC',
          paddingTop: 50,
          
        }}>
        We’re here to listen
      </Text>
      <Image
        style={{width: 341, height: 233,marginTop:200}}
        source={require('../assets/images/imgstart.png')}
      />
    
  </SafeAreaView>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({})