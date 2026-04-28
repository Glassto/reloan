import React from 'react';
import { View, Text } from 'react-native';
import {Href, Link} from "expo-router";

const SignIn = () => {
  return (
    <View>
        <Text>SignIn</Text>
        <Link href={"/(auth)/sign-in" as Href}>Sign In</Link>
    </View>
  );
};

export default SignIn;