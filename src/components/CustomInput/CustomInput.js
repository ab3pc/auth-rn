import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AppColor } from '../../config';
import { Controller } from "react-hook-form";

const CustomInput = ({ control, name, rules = {}, placeholder, secureTextEntry, icon }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          <View style={[styles.container, { borderColor: error ? AppColor.ERROR : AppColor.BORDER }]}>
            {icon && <MaterialIcons
              name={icon}
              size={20}
              color="#666"
              style={{ marginRight: 5, borderRightWidth: 1, borderColor: "#ccc", width: 16, }}
            />}
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />

          </View>
          {error && (
            <Text style={{ color: AppColor.ERROR, alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',

    borderColor: AppColor.BORDER,
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,

  },
  input: {

  }
})

export default CustomInput