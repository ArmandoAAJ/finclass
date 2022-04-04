import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Access from "../../pages/Access";
import Login from "../../pages/Login";

const Stack = createNativeStackNavigator();
const SignInStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="access" component={Access} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export default SignInStack;
