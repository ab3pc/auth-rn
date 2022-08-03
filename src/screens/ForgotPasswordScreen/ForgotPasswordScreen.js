import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { CustomButton, CustomInput } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useForm } from "react-hook-form"
const ForgotPasswordScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onSendPressed = () => {
    console.warn('onSignInRegisterPressed')
    navigation.navigate('NewPasswordScreen')
  }

  const onSingInPressed = () => {
    console.warn('onSignInRegisterPressed')

    navigation.navigate('SignIn')
  }



  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <View style={{ width: '100%', textAlign: 'left', marginTop: 32 }}>
          <Text style={{ textAlign: 'left' }}>Username *</Text>

        </View>
        <CustomInput
          name='username'
          placeholder='Enter your username'
          control={control}
          rules={{
            required: 'Username is required',
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
        <CustomButton text='Send' onPress={handleSubmit(onSendPressed)} bgColor="orange" />
        <CustomButton text='Back to Sign in' onPress={onSingInPressed} type='TERTIARY' />





      </View>
    </ScrollView>
  )
}

export default ForgotPasswordScreen


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
  },

})