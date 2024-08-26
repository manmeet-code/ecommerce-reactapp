import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import {Link} from 'expo-router';
const Signin = () => {
  const [form,setForm]= useState({
    email:"",
    password:""
  })
 const [isSubmitting,setIsSubmitting]=useState(false)
  const submit=()=>{}
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#161622' }}> {/* Updated to use a solid color */}
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 16, paddingVertical: 24 }}>
        <View style={{ alignItems: 'center', minHeight: '85%', justifyContent: 'center' }}>
          <Image 
            source={images.logo} 
            resizeMode='contain' 
            style={{ width: 115, height: 35 }} 
          />
          <Text 
            style={{
              fontSize: 24, // text-2xl
              color: 'white', // text-white
              fontWeight: '600', // text-semibold
              marginTop: 20, // mt-10
              fontFamily: 'Poppins-SemiBold' // Replace with your actual font name if different
            }}
          >
            Log in to pet shop app
          </Text>
          <FormField title="Email" value={form.email}
          handleChangeText={(e)=>setForm({...form,email:e})}
          otherStyles="mt-7"
          keyboardType="email-address"
          />
           <FormField title="Password" value={form.password}
          handleChangeText={(e)=>setForm({...form,password:e})}
          otherStyles="mt-7"
          
          />
          <CustomButton title="Sign-in"
          handlePress={submit}
          contentContainerStyle="mt-7"
          isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2"><Text className="text-lg text-gray-100 font-regular ">Don"t have an account ?</Text>
          <Link href="/sign-up" className='text-lg font-psemibold text-secondary '>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
