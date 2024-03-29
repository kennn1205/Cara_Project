import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';

import font from '../../styles/font';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';


const Screen1 = () => {
  const navigation = useNavigation();
  const [selectedIds, setSelectedIds] = useState<Record<number, boolean>>({});
  const data = [
    {
      id: 1,
      text: 'Depression',
    },
    {
      id: 2,
      text: 'Anxiety',
    },
    {
      id: 3,
      text: 'Bipolar',
    },
    {
      id: 4,
      text: 'Relationship',
    },
    {
      id: 5,
      text: 'Loneliness',
    },
    {
      id: 6,
      text: 'Work / Career',
    },
    {
      id: 7,
      text: 'Addiction',
    },
    {
      id: 8,
      text: 'PTSD',
    },
    {
      id: 9,
      text: 'Sexual Harrassment / Assault',
    },
  ];
  type ItemProps = {id: number; text: string};
  const Item = ({id, text}: ItemProps) => {
    const isSelected = selectedIds[id] as boolean;
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedIds(prevState => ({
            ...prevState,
            [id]: !isSelected,
          }));
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 7,
          margin: 5,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#4FA5C1',
          backgroundColor: isSelected ? '#4FA5C1' : '#FFF',
        }}>
        <Text
          style={{color: isSelected ? '#FFF' : '#4FA5C1', letterSpacing: 1.5}}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          position: 'absolute',
          width: '200%',
          left: '-50%',
          height: '50%',
          marginTop: -250,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F5F2EF',
          borderBottomStartRadius: 500,
          borderBottomEndRadius: 500,
        }}>
         
        <Text
          style={{
            fontSize: 24,
            fontFamily: font.bold,
            color: '#315CAC',
            marginTop: 240,
          }}>
          PREFERENCES
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 70,
          gap: 10,
        }}>
        <Image
          style={{width: 145, height: 105}}
          source={require('../assets/images/imgpreferences.png')}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: font.bold,
            color: '#6F8DC5',
          }}>
          Step 1 of 3
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: font.bold,
            color: '#315CAC',
            textAlign: 'center',
            maxWidth: 333,
          }}>
          Before you start chatting, please let us know what your concerns are
          so that we can match you with the right person.
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: 'white',
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {data.map(item => (
            <Item key={item.id} id={item.id} text={item.text} />
          ))}
        </View>
        <Pressable
          // onPress={() => {
          //   console.log('I dont know');
          //   navigation.navigate("Screen2" as never); // as never là cách để bỏ qua kiểm tra kiểu dữ liệu khi truyền vào hàm navigate
          // }}
          
          style={{
            backgroundColor: '#4FA5C1',
            borderRadius: 20,
            width: 125,
            height: 40,
            marginTop: -25,
            // alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: font.regular,
              color: '#FFF',
              textAlign: 'center',
              maxWidth: 333,
            }}>
            I don't know
          </Text>
        </Pressable>
        <Pressable
        onPress={() => {
          console.log('Next');
          navigation.navigate("Screen2" as never); // as never là cách để bỏ qua kiểm tra kiểu dữ liệu khi truyền vào hàm navigate
        }}

          style={{
            backgroundColor: '#315CAC',
            borderRadius: 5,
            width: 274,
            height: 44,
            justifyContent: 'center',
            marginTop:50,
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: font.bold,
              color: '#FFF',
              textAlign: 'center',
              maxWidth: 333,
            }}>
            Next
          </Text>
        </Pressable>
        <Pressable>
          <Text
            style={{
              fontSize: 14,
              fontFamily: font.semiBold,
              color: '#6F8DC5',
              textAlign: 'center',
              maxWidth: 333,
            }}>
            Skip this step
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
