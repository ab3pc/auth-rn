import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { CustomButton, CustomInput } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useForm } from "react-hook-form";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const SignUpScreen = () => {

  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      username: 'Qwerty'
    }
  });
  const pwd = watch('password');

  const onSignInRegisterPressed = () => {
    console.warn('onSignInRegisterPressed')
    navigation.navigate('ConfirmEmailScreen')
  }

  const onSignInPressed = () => {
    console.warn('onSignInPressed')
    navigation.navigate('SignIn')
  }
  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed')
  }

  const onPrivacyPolicyPressed = () => {
    console.warn('onPrivacyPolicyPressed')
  }
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder='Username'
          control={control}
          name="username"
          rules={{
            required: 'Username is required',
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Just A-Za-z'
            },
            minLength: {
              value: 3,
              message: 'Username should be min 3 characters long'
            },
            maxLength: {
              value: 15,
              message: 'Username should be max 15 characters long'
            }
          }}
        />

        <CustomInput
          placeholder='Email'
          control={control}
          name="email"
          rules={{
            required: 'Email is required',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Email is invalid'
            }
          }}
        />

        <CustomInput
          placeholder='Password'
          control={control}
          secureTextEntry
          name='password'
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be min 8 characters long'
            }
          }}
        />

        <CustomInput
          placeholder='Repeat Password'
          name='repeat-password'
          control={control}
          secureTextEntry
          rules={{
            validate: value => value === pwd || "Password don't match"
          }}
        />

        <CustomButton text='Register' onPress={handleSubmit(onSignInRegisterPressed)} />
        <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text></Text>
        <CustomButton text="Have an account ? Sign In" onPress={onSignInPressed} type="TERTIARY" />
      </View>
    </ScrollView>
  )
}

export default SignUpScreen


const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10
  },
  text: {
    color: 'gray',
    marginVertical: 10
  },
  link: {
    color: '#FDB075'
  }
})