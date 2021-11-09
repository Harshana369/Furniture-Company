import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/color';
import STYLES from '../../consts/styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '868585959251-a442lffcarvunmctsbl90oeb6l2pd3b9.apps.googleusercontent.com',
});

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


//  retrieveData = async () => {
//   try {
//     const ema = await AsyncStorage.getItem('myemail');
//     const pass = await AsyncStorage.getItem('mypass');
//     if (ema !== null) {
//       console.log(ema,pass);
//       setEmail(ema);
//       setPassword(pass);
//     }
//   } catch (error) {
//     alert(error);
//   }
// };

// useEffect(() => {
// retrieveData();
// }, []);


   userLogin = () => {
    console.log(email, password);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
        alert('signed in!');
        navigation.replace('Home');
      })
      .catch(error => {
        alert(error);
      });
  };

  onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const user = auth().signInWithCredential(googleCredential);
    //console.log((await user).user);
    alert('signed in!');
    navigation.replace('Home');
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
            Companies
          </Text>
        </View>

        <View style={{marginTop: 70}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Welcome Back,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
            Sign in to continue
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
              placeholder="Enter Password"
              value={password}
              onChangeText={text => setPassword(text)}
              style={STYLES.input}
              secureTextEntry
            />
          </View>

          <TouchableOpacity onPress={userLogin}>
            <View style={STYLES.btnPrimary}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Sign In
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
            <TouchableOpacity onPress={onGoogleButtonPress}>
              <View style={STYLES.btnSecondary}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  Sign in with
                </Text>
                <Image
                  style={STYLES.btnImage}
                  source={require('../../assets/google.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{width: 15}}></View>
              <View style={STYLES.btnSecondary}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  Sign in with
                </Text>
                <Image
                  style={STYLES.btnImage}
                  source={require('../../assets/facebook.png')}
                />
              </View>
            </TouchableOpacity>
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
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold'}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
