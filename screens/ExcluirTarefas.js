import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ExcluirTarefas = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.excluirTarefas}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Text style={[styles.myTasks, styles.myTasksFlexBox]}>
        <Text style={styles.text}>
          <Text style={styles.text1}>{`  `}</Text>
        </Text>
        <Text style={styles.myTasks1}>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.myTasks2}>My Tasks</Text>
        </Text>
      </Text>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("CadastrarTarefas")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
      </Pressable>
      <Text style={[styles.novoLembrete, styles.myTasksFlexBox]}>
        <Text
          style={styles.text3}
        >{`                                             `}</Text>
        <Text style={styles.novoLembrete1}>Novo Lembrete</Text>
      </Text>
      <Image
        style={[styles.vectorIcon2, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Text style={[styles.taskExemploDeContainer, styles.myTasksFlexBox]}>
        <Text style={styles.myTasks2}>{`Task
`}</Text>
        <Text style={styles.exemploDeOnde}>
          Exemplo de onde pode-se por as notas
        </Text>
        <Text style={styles.myTasks2}>{` 
`}</Text>
      </Text>
      <View style={styles.excluirTarefasChild} />
      <Text style={[styles.noConcludas, styles.myTasksFlexBox]}>
        Não Concluídas
      </Text>
      <Pressable
        style={styles.remove}
        onPress={() => navigation.navigate("DetalhesDaTarefa")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/remove.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  myTasksFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  wrapperLayout: {
    height: 30,
    width: 33,
    top: 22,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  vectorIcon: {
    height: "2.44%",
    width: "2.8%",
    top: "4.53%",
    right: "88.86%",
    bottom: "93.03%",
    left: "8.33%",
    position: "absolute",
  },
  text1: {
    fontFamily: FontFamily.judsonRegular,
  },
  text: {
    fontSize: FontSize.size_sm,
  },
  myTasks2: {
    fontSize: FontSize.size_xl,
  },
  myTasks1: {
    fontFamily: FontFamily.orelegaOneRegular,
  },
  myTasks: {
    top: 24,
    left: 134,
    width: 99,
    height: 32,
  },
  vectorIcon1: {
    height: "1.1%",
    width: "6.73%",
    top: "5.16%",
    right: "5.77%",
    bottom: "93.75%",
    left: "87.5%",
    position: "absolute",
  },
  wrapper: {
    left: 311,
  },
  container: {
    left: 19,
  },
  icon2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "86.39%",
    top: "88.91%",
    right: "4.66%",
    bottom: "6.06%",
    width: "8.95%",
    height: "5.03%",
    position: "absolute",
  },
  text3: {
    fontFamily: FontFamily.judsonRegular,
    fontSize: FontSize.size_sm,
  },
  novoLembrete1: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.orelegaOneRegular,
  },
  novoLembrete: {
    top: 573,
    left: 52,
    width: 259,
    height: 24,
  },
  vectorIcon2: {
    height: "5.47%",
    width: "10%",
    top: "47.34%",
    right: "44.17%",
    bottom: "47.19%",
    left: "45.83%",
    position: "absolute",
  },
  vectorIcon3: {
    height: "3.75%",
    width: "7.22%",
    top: "16.09%",
    right: "84.72%",
    bottom: "80.16%",
    left: "8.06%",
    position: "absolute",
  },
  exemploDeOnde: {
    fontSize: FontSize.size_xs,
  },
  taskExemploDeContainer: {
    top: 103,
    left: 77,
    width: 238,
    height: 20,
    fontFamily: FontFamily.judsonRegular,
  },
  excluirTarefasChild: {
    top: 88,
    left: 38,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 269,
    height: 1,
    position: "absolute",
  },
  noConcludas: {
    top: 72,
    left: 40,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.abelRegular,
    width: 78,
    height: 12,
  },
  remove: {
    left: 288,
    top: 119,
    width: 40,
    height: 25,
    position: "absolute",
  },
  excluirTarefas: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default ExcluirTarefas;
