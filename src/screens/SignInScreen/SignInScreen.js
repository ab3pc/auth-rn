import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native';
import React from 'react';
import Logo from '../../../assets/images/logo.png';
import { CustomButton, CustomInput } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useForm } from "react-hook-form"

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSignInPressed = (data) => {

    console.warn('Sign In')
    // validate user

    navigation.navigate('HomeScreen')
  }

  const onForgotPassPressed = () => {
    console.warn('Forgot')

    navigation.navigate('ForgotPasswordScreen')
  }

  const onSignUpPressed = () => {
    console.warn('Sign Up')
    navigation.navigate('SignUpScreen')
  }
  return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode='contain' />
        <CustomInput
          placeholder='Username'
          name="username"
          control={control}
          rules={{ required: 'Username is required' }}
          icon='alternate-email'
        />
        <CustomInput
          placeholder='Password'
          name="password"
          icon={'lock'}
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long'
            },
          }}
        />
        {/* <Controller
          control={control}
          name="username"
          render={({ field: { value, onChange, onBlur } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder='username' />
          )}
        /> */}

        {/* <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange, onBlur } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder='password' />
          )}
        /> */}



        <CustomButton text='Sign In' onPress={handleSubmit(onSignInPressed)} />
        <CustomButton text='Forgot password' onPress={onForgotPassPressed} type="TERTIARY" />
        <CustomButton text="Don't have an account ? Create one" onPress={onSignUpPressed} type="TERTIARY" />
      </View>
    </ScrollView>
  )
}

export default SignInScreen


const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200
  }
})