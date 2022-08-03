import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { CustomButton, CustomInput } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const NewPasswordScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();


  const onSubmitPressed = () => {
    console.warn('onSignInRegisterPressed')
    navigation.navigate('HomeScreen')
  }

  const onSingInPressed = () => {
    console.warn('onSignInRegisterPressed')
    navigation.navigate('SignIn')
  }



  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <View style={{ width: '100%', textAlign: 'left', marginTop: 16 }}>
          <Text style={{ textAlign: 'left' }}>Confirmation code *</Text>
        </View>
        <CustomInput
          name='code'
          control={control}
          rules={{
            required: 'Code is required'
          }}
          placeholder='Enter your confirmation code' />

        <View style={{ width: '100%', textAlign: 'left', marginTop: 16 }}>
          <Text style={{ textAlign: 'left' }}>Password *</Text>
        </View>
        <CustomInput
          name="password"
          control={control}
          placeholder='Enter your new password'
          rules={{
            required: 'Password is required'
          }}
        />

        <CustomButton text='Submit' onPress={handleSubmit(onSubmitPressed)} bgColor="orange" />
        <CustomButton text='Back to Sign in' onPress={onSingInPressed} type='TERTIARY' />





      </View>
    </ScrollView>
  )
}

export default NewPasswordScreen


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