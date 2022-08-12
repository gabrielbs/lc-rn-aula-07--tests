import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {TextInput} from "react-native";
import {Box} from "../../ds/Box";
import {ButtonText, CustomButton} from "../../ds/CustomButton";
import {CustomText} from "../../ds/CustomText";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StackType} from "../../routes/types";
import {StatusBar} from "expo-status-bar";

export const Login = () => {
  const navigation = useNavigation<NavigationProp<StackType>>();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isError, setIsError] = React.useState(false);

  const loginHandler = async () => {
    try {
      const response = await AsyncStorage.getItem("feedlogin_user");
      const responseObject = JSON.parse(response || "{}");
      if (
        responseObject?.username === username &&
        responseObject?.password === password
      ) {
        navigation.navigate("feed");
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.log({error});
    }
  };

  return (
    <Box padding={10}>
      {true && <CustomText variant={"large"}>Cadastro</CustomText>}
      <Box marginY={30}>
        <TextInput placeholder="Usuário" onChangeText={setUsername} />
        <TextInput
          secureTextEntry
          placeholder="Senha"
          onChangeText={setPassword}
        />
      </Box>
      {isError && (
        <Box>
          <CustomText variant="regular">Usuário ou senha incorretos</CustomText>
        </Box>
      )}
      <Box marginTop={10}>
        <CustomButton onPress={() => loginHandler()}>
          <ButtonText variant="regular">Login</ButtonText>
        </CustomButton>
      </Box>
      <StatusBar />
    </Box>
  );
};
