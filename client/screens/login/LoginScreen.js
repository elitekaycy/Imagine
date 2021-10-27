import React from 'react';
import {View, Text, TextInput, Pressable, Image, StatusBar} from 'react-native';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Text style={styles.headerText}>LOGIN</Text>

      <View style={[styles.actionBox, {marginTop: 5}]}>
        <MaterialIcon name="email" size={22} style={styles.textInputIcon} />
        <TextInput placeholder="Email or username" />
      </View>

      <View style={styles.actionBox}>
        <MaterialIcon name="lock" size={22} style={styles.textInputIcon} />
        <TextInput placeholder="Password" />
      </View>

      <Pressable style={styles.buttonContainer}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </Pressable>

      <Text
        style={{
          textAlign: 'center',
          marginTop: 25,
          marginBottom: 25,
          color: '#c4c4c4',
        }}>
        Or login with
      </Text>

      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 5}}>
        <Pressable
          style={[
            styles.loginWithBox,
            {paddingVertical: 5, paddingHorizontal: 30, marginRight: 5},
          ]}>
          <Image
            source={require('../../assets/google-logo.png')}
            style={styles.loginWithImage}
          />
          <Text style={styles.loginWithText}>Google</Text>
        </Pressable>

        <Pressable style={styles.loginWithBox}>
          <Image
            source={require('../../assets/facebook-logo.png')}
            style={{height: 40, width: 40, marginRight: 10}}
          />
          <Text style={[styles.loginWithText, {color: '#4169e1'}]}>
            Facebook
          </Text>
        </Pressable>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Not a member? </Text>
        <Pressable onPress={() => navigation.navigate('signup')}>
          <Text
            style={[
              styles.footerText,
              {
                textDecorationLine: 'underline',
                textDecorationStyle: 'solid',
                fontWeight: 'bold',
              },
            ]}>
            Sign Up Now
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
