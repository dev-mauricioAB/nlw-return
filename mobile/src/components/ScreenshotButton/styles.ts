import { theme } from "./../../theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: theme.colors.surface_secondary,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  removeIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  image: {
    width: 40,
    height: 40,
  },
});
