import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import font from '../../styles/font';
import {useNavigation} from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        position: 'relative',
        overflow: 'hidden', // This is important
        backgroundColor: 'white',
      }}>
      <View
        style={{
          position: 'absolute', // This is important
          width: '200%', // This will make the View extend beyond the screen width
          left: '-50%', // This wi
          height: '58%', // This will make the View extend beyond the screen height
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F5F2EF',
          //   borderRadius: 50,
          borderBottomStartRadius: 500, // Adjust this value to change the curvature
          borderBottomEndRadius: 500,
        }}>
        <Image
          style={{width: 145, height: 31,marginTop:30}}
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
          style={{width: 341, height: 233,}}
          source={require('../assets/images/imgstart.png')}
        />
      </View>
      <View
        style={{
          flex: 1, // This is important
          justifyContent: 'center', // This is important
          alignItems: 'center',
          marginTop: 390,
          gap:20
        }}>
        <View style={{width: 294, height: 92}}>
          <Text
            style={{
              fontFamily: font.bold,
              fontSize: 16,
              textAlign: 'center',
              color: '#315CAC',
            }}>
            CARA is an online Community to connect with a mental health advocate
            about mental wellness, anonymously and securely.
          </Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate('Preferences'as never )}
        
          style={{
            backgroundColor: '#315CAC',
            width: 274,
            height: 67,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: font.bold,
              color: 'white',
              fontSize: 20,
              textAlign: 'center',
            }}>
            It’s free to try, chat now      😊
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: '#F5D267',
            width: 272,
            height: 49,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: font.bold,
              color: '#315CAC',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Log In
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
