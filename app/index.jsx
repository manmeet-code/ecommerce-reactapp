import { ScrollView, Text, View, Image, StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import {Redirect,router} from 'expo-router';
const Index = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 }}>
          <Image
            source={images.logo}
            style={{ width: 130, height: 100 }}
            resizeMode="cover"
          />
          <Image
            source={images.cards}
            style={{ maxWidth: 380, width: '100%', height: 300 }}
            resizeMode="contain"
          />
          <View style={{ marginTop: 20, position: 'relative', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>
              Discover Endless Possibilities with {' '}
              <Text style={{ color: '#FF5733' }}>Paws and Claws</Text>
            </Text>
            <View style={{ width: '60%', height: 2, backgroundColor: '#FF5733', marginVertical: 10 }} />
            <Image
              source={images.path}
              style={{ width: 136, height: 15, position: 'absolute', bottom: -8, right: -8 }}
            />
          </View>
          <View style={{ marginTop: 30, paddingHorizontal: 16, alignItems: 'center' }}>
            <Text style={{ fontSize: 16, color: '#333', textAlign: 'center',fontWeight:'bold' }}>
              Your one-stop shop for all things pets. From toys to grooming supplies, we have everything your furry friends need.
            </Text>
            <CustomButton 
            title='Continue with Email' 
            handlePress={()=>router.push('/sign-in')} 
            containerStyles='w-full mt-7'
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
};


export default Index;
