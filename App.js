const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import CdigoEmail from "./screens/CdigoEmail";
import CadastrarUsurio from "./screens/CadastrarUsurio";
import Button1 from "./components/Button1";
import Component from "./components/Component";
import RecuperaoDeSenha from "./screens/RecuperaoDeSenha";
import DetalhesDaTarefa from "./screens/DetalhesDaTarefa";
import TelaInicial from "./screens/TelaInicial";
import PerfilDeUsurio from "./screens/PerfilDeUsurio";
import CadastrarTarefas from "./screens/CadastrarTarefas";
import ListarTarefras from "./screens/ListarTarefras";
import ExcluirTarefas from "./screens/ExcluirTarefas";
import Menu from "./screens/Menu";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

export default function App() {

  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "OrelegaOne-Regular": require("./assets/fonts/OrelegaOne-Regular.ttf"),
    "Judson-Regular": require("./assets/fonts/Judson-Regular.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "Amiko-Regular": require("./assets/fonts/Amiko-Regular.ttf"),
    "Abel-Regular": require("./assets/fonts/Abel-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CdigoEmail"
              component={CdigoEmail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastrarUsurio"
              component={CadastrarUsurio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecuperaoDeSenha"
              component={RecuperaoDeSenha}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetalhesDaTarefa"
              component={DetalhesDaTarefa}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaInicial"
              component={TelaInicial}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PerfilDeUsurio"
              component={PerfilDeUsurio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastrarTarefas"
              component={CadastrarTarefas}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ListarTarefras"
              component={ListarTarefras}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExcluirTarefas"
              component={ExcluirTarefas}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );

}


