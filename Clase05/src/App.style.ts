import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({

  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  display: {
    fontSize: 40,
    marginBottom: 20
  },

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10
  }

});