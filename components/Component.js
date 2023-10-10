import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component = memo(
  ({
    emailAddress,
    componentPosition,
    componentTop,
    componentLeft,
    componentWidth,
    componentHeight,
  }) => {
    const componentStyle = useMemo(() => {
      return {
        ...getStyleValue("position", componentPosition),
        ...getStyleValue("top", componentTop),
        ...getStyleValue("left", componentLeft),
        ...getStyleValue("width", componentWidth),
        ...getStyleValue("height", componentHeight),
      };
    }, [
      componentPosition,
      componentTop,
      componentLeft,
      componentWidth,
      componentHeight,
    ]);

    return (
      <View style={[styles.component, componentStyle]}>
        <View style={styles.componentChild} />
        <Text style={styles.juningmailcom}>{emailAddress}</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  componentChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    position: "absolute",
  },
  juningmailcom: {
    top: "32.69%",
    left: "4.96%",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  component: {
    width: 343,
    height: 52,
  },
});

export default Component;
