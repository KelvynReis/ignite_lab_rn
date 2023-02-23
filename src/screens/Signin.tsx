import { useState } from "react";

import { VStack, Heading, Icon, useTheme } from "native-base";

import Logo from "../assets/logo_primary.svg";
import { EvilIcons, Entypo } from "@expo/vector-icons";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Signin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        mb={4}
        placeholder="E-mail"
        InputLeftElement={
          <Icon
            as={
              <EvilIcons name="envelope" size={24} color={colors.gray[300]} />
            }
            ml={3}
            size="xl"
          />
        }
        onChangeText={setName}
      />
      <Input
        mb={8}
        placeholder="Senha"
        InputLeftElement={
          <Icon
            as={<Entypo name="key" color={colors.gray[300]} />}
            ml={3}
            size="md"
          />
        }
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Entrar" w="full" />
    </VStack>
  );
}
