import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {StackType} from "./types";
import {Feed} from "../features/feed";
import {FeedInternal} from "../features/feedInternal";
import {CustomHeader} from "../components/CustomHeader";
import {SignUp} from "../features/signup";
import {Login} from "../features/login";

const Stack = createNativeStackNavigator<StackType>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="feed"
          component={Feed}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="feedInternal"
          component={FeedInternal}
          options={{
            header: (props) => <CustomHeader {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
