import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import CustomButton from './CustomButton'; // Adjust the import path if needed

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  // Replace these imports with actual icons
  const icons = {
    eye: require('./path-to-eye-icon.png'), // Replace with your actual path
    eyehide: require('./path-to-eyehide-icon.png'), // Replace with your actual path
  };

  return (
    <View style={{ ...otherStyles, marginVertical: 8 }}>
      <Text style={{ fontSize: 16, color: '#ffffff', fontWeight: '500' }}>{title}</Text>
      <View style={{
        borderWidth: 2,
        borderColor: '#cccccc',
        width: '100%',
        height: 64,
        paddingHorizontal: 16,
        backgroundColor: '#333333',
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <TextInput
          style={{ flex: 1, color: '#ffffff', fontWeight: '600', fontSize: 16 }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          {...props}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.eyehide : icons.eye}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        <CustomButton />
      </View>
    </View>
  );
};

export default FormField;
