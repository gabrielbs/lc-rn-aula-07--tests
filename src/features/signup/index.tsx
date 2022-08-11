import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {TextInput} from "react-native";
import {Box} from "../../ds/Box";
import {ButtonText, CustomButton} from "../../ds/CustomButton";
import {CustomText} from "../../ds/CustomText";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StackType} from "../../routes/types";

export const SignUp = () => {
  const navigation = useNavigation<NavigationProp<StackType>>();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signUpHandler = async () => {
    if (username && password) {
      try {
        await AsyncStorage.setItem(
          "feedlogin_user",
          JSON.stringify({username, password})
        );
      } catch (error) {
        console.log({error});
      }
    }
  };

  return (
    <Box padding={10}>
      <CustomText variant={"large"}>Cadastro</CustomText>
      <Box marginY={30}>
        <TextInput placeholder="Usuário" onChangeText={setUsername} />
        <TextInput
          secureTextEntry
          placeholder="Senha"
          onChangeText={setPassword}
        />
      </Box>
      <Box marginTop={10}>
        <CustomButton onPress={() => signUpHandler()}>
          <ButtonText variant="regular">Cadastrar</ButtonText>
        </CustomButton>
      </Box>
      <Box marginTop={10}>
        <CustomButton
          variant="ghost"
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          <CustomText variant="regular">ir para o login</CustomText>
        </CustomButton>
      </Box>
    </Box>
  );
};
