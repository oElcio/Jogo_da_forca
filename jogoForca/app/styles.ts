import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2e",
    alignItems: "center",
    justifyContent: "center",
    padding: width * 0.05, // padding relativo
  },
  textoPalavra: {
    fontSize: width * 0.07, // ~28 em telas médias
    fontWeight: "bold",
    color: "#f8f8f2",
    textTransform: "uppercase",
    letterSpacing: 2,
    textAlign: "center",
    flexWrap: "wrap",
  },
  teclado: {
    backgroundColor: "#2d2d3a",
    padding: width * 0.04,
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: height * 0.02,
    borderRadius: 12,
    gap: width * 0.02,
    width: "95%", // ocupa quase toda a tela
  },
  botaoUsado: {
    backgroundColor: "#44475a",
    opacity: 0.7,
  },
  palavra: {
    flexDirection: "row",
    justifyContent: "center",
    gap: width * 0.03,
    paddingVertical: height * 0.02,
    flexWrap: "wrap", // quebra em telas pequenas
  },
  forca: {
    backgroundColor: "#282a36",
    padding: width * 0.05,
    borderRadius: 16,
    height: height * 0.28, // altura proporcional à tela
    justifyContent: "center",
    alignItems: "center",
    marginVertical: height * 0.02,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  textoResultado: {
    fontSize: width * 0.055, // ~22 em telas médias
    fontWeight: "bold",
    color: "#ff79c6",
    textAlign: "center",
    marginBottom: height * 0.02,
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
});
