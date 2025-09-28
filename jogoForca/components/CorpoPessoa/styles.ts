// CorpoPessoa/styles.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bonecoContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: 80,
    height: 140,
  },

  cabeca: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 3,
    borderColor: "#FF6B6B",
    marginBottom: 4,
  },

  corpoContainer: {
    alignItems: "center",
  },

  corpo: {
    width: 4,
    height: 40,
    backgroundColor: "#FF6B6B",
    marginBottom: 6,
  },

  bracosContainer: {
    flexDirection: "row",
    marginBottom: 6,
    bottom: 40,
  },

  bracoEsquerdo: {
    width: 24,
    height: 3,
    backgroundColor: "#FF6B6B",
    transform: [{ rotate: "-40deg" }],
    marginRight: 8,
  },

  bracoDireito: {
    width: 24,
    height: 3,
    backgroundColor: "#FF6B6B",
    transform: [{ rotate: "40deg" }],
  },

  pernasContainer: {
    flexDirection: "row",
  },

  pernaEsquerda: {
    width: 26,
    height: 3,
    backgroundColor: "#FF6B6B",
    transform: [{ rotate: "-30deg" }],
    marginRight: 8,
  },

  pernaDireita: {
    width: 26,
    height: 3,
    backgroundColor: "#FF6B6B",
    transform: [{ rotate: "30deg" }],
  },
});