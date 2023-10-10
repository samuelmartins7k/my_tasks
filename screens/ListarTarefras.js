import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ListarTarefras = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.listarTarefras}>
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
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector, styles.vectorLayout]}
        onPress={() => navigation.navigate("CadastrarTarefas")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </Pressable>
      <Text style={[styles.novoLembrete, styles.myTasksFlexBox]}>
        <Text
          style={styles.text3}
        >{`                                             `}</Text>
        <Text style={styles.novoLembrete1}>Novo Lembrete</Text>
      </Text>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Text
        style={[
          styles.task23minExemploContainer,
          styles.exemploContainerLayout,
        ]}
      >
        <Text style={styles.myTasks2}>{`Task `}</Text>
        <Text style={styles.minExemploDeOnde}>{`23min
Exemplo de onde pode-se por as notas`}</Text>
        <Text style={styles.myTasks2}>{` 
`}</Text>
      </Text>
      <Text
        style={[styles.taskExemploDeContainer, styles.exemploContainerLayout]}
      >
        <Text style={styles.myTasks2}>{`Task 
`}</Text>
        <Text style={styles.minExemploDeOnde}>
          Exemplo de onde pode-se por as notas
        </Text>
        <Text style={styles.myTasks2}>{` 
`}</Text>
      </Text>
      <Image
        style={[styles.vectorIcon4, styles.vectorLayout]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <View style={[styles.listarTarefrasChild, styles.listarLayout]} />
      <View style={[styles.listarTarefrasItem, styles.listarLayout]} />
      <Text style={[styles.concludas, styles.concludasTypo]}>Concluídas</Text>
      <Text style={[styles.noConcludas, styles.concludasTypo]}>
        Não Concluídas
      </Text>
      <Image
        style={styles.timeIcon}
        contentFit="cover"
        source={require("../assets/time1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  myTasksFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorLayout: {
    height: "3.78%",
    width: "6.73%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  vectorIconLayout: {
    width: "7.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  exemploContainerLayout: {
    height: 20,
    width: 238,
    left: 77,
    fontFamily: FontFamily.judsonRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  listarLayout: {
    height: 1,
    width: 269,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 38,
    position: "absolute",
  },
  concludasTypo: {
    fontFamily: FontFamily.abelRegular,
    fontSize: FontSize.size_smi,
    left: 40,
    textAlign: "left",
    color: Color.colorBlack,
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
  vectorIcon: {
    height: "1.1%",
    top: "5.16%",
    bottom: "93.75%",
    left: "87.5%",
    right: "5.77%",
    width: "6.73%",
    maxWidth: "100%",
    position: "absolute",
  },
  wrapper: {
    left: 311,
    top: 22,
    width: 33,
    height: 30,
    position: "absolute",
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    top: "88.91%",
    bottom: "7.31%",
    left: "87.5%",
    right: "5.77%",
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
  vectorIcon1: {
    height: "5.47%",
    width: "10%",
    top: "47.34%",
    right: "44.17%",
    bottom: "47.19%",
    left: "45.83%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "3.75%",
    top: "16.09%",
    right: "84.72%",
    bottom: "80.16%",
    left: "8.06%",
  },
  vectorIcon3: {
    height: "4.04%",
    top: "31.43%",
    right: "84.44%",
    bottom: "64.53%",
    left: "8.33%",
  },
  minExemploDeOnde: {
    fontSize: FontSize.size_xs,
  },
  task23minExemploContainer: {
    top: 103,
  },
  taskExemploDeContainer: {
    top: 202,
  },
  vectorIcon4: {
    top: "31.53%",
    right: "84.66%",
    bottom: "64.69%",
    left: "8.61%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  listarTarefrasChild: {
    top: 88,
  },
  listarTarefrasItem: {
    top: 185,
  },
  concludas: {
    top: 169,
    width: 64,
    height: 21,
  },
  noConcludas: {
    top: 72,
    width: 78,
    height: 12,
  },
  timeIcon: {
    top: 104,
    left: 154,
    width: 23,
    height: 23,
    position: "absolute",
  },
  listarTarefras: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default ListarTarefras;
