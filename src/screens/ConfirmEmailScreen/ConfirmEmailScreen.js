import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { CustomButton, CustomInput } from '../../components';
import { useNavigation } from "@react-navigation/native";
import { useForm } from 'react-hook-form'

const ConfirmEmailScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onConfirmPressed = (data) => {
    console.warn('onSignInRegisterPressed')
    navigation.navigate('HomeScreen')
  }
  const onSignInPressed = () => {
    console.warn('onSignInPressed')
    navigation.navigate('SignIn')
  }
  const onResendCodePressed = () => {
    console.warn('onSignInPressed')
  }


  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          name="code"
          control={control}
          placeholder='Enter your confirmation code'
          secureTextEntry
          rules={{
            required: 'Code is required'
          }}
        />
        <CustomButton text='Confirm' onPress={handleSubmit(onConfirmPressed)} bgColor="orange" />

        <CustomButton text='Back to sign in' onPress={onSignInPressed} type='SECONDARY' />
        <CustomButton text='Resend code' onPress={onResendCodePressed} type='TERTIARY' />



      </View>
    </ScrollView>
  )
}

export default ConfirmEmailScreen


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