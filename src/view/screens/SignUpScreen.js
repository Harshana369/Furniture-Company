import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../consts/styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

//  storeData = async () => {
//   try {
//     await AsyncStorage.setItem('myemail', email);
//     await AsyncStorage.setItem('mypass', password);

//   } catch (error) {
//     alert(error);
//   }
// };



  const registerUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(createdUser => {
        createdUser.user.updateProfile({
          displayName: userName,
        });
        alert('User account created & signed in!');
        navigation.replace('Home');
        //storeData();
        //retrieveData();

        // console.log(createdUser.user);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }

        alert.error(error);
      });
  };

  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
            Furniture
          </Text>
          <Text> </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.secondary}}>
            Campany
          </Text>
        </View>
        <View style={{marginTop: 70}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Welcome Back,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
            Sign up to continue
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
            <TextInput
              placeholder="Enter Email"
              value={email}
              onChangeText={text => setEmail(text)}
              style={STYLES.input}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <TextInput
              placeholder="Enter UserName"
              value={userName}
              onChangeText={text => setUserName(text)}
              style={STYLES.input}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <TextInput
              placeholder="Enter Password"
              value={password}
              onChangeText={text => setPassword(text)}
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <TouchableOpacity onPress={registerUser}>
            <View style={STYLES.btnPrimary}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Sign Up
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={STYLES.line}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {/* <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign up with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../../assets/facebook.png')}
              />
            </View> */}
            {/* <View style={{width: 10}}></View>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign up with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../../assets/google.png')}
              />
            </View> */}
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.light, fontWeight: 'bold'}}>
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold'}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
