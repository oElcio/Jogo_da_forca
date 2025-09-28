import { useState } from "react";
import { Alert, Text, View } from "react-native";
import Botao from "../components/Botao";
import BotaoAlfabeto from "../components/BotaoAlfabeto";
import Pessoa from "../components/CorpoPessoa";
import { styles } from "./styles";

export default function Index() {
  const [palavraSecreta, setPalavraSecreta] = useState<string[]>([]);
  const [letrasCorretas, setLetrasCorretas] = useState<string[]>([]);
  const [tentativasRestantes, setTentativasRestantes] = useState<number>(6);
  const [letrasJaTentadas, setLetrasJaTentadas] = useState<string[]>([]);

  const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");

  const listaDePalavras = [
  "abelha",
  "arara",
  "baleia",
  "camelo",
  "cavalo",
  "coelho",
  "coruja",
  "girafa",
  "leopardo",
  "macaco",
  "papagaio",
  "tartaruga",
  "urso",
  "zebra",
  "oceano",
  "floresta",
  "vulcão",
  "neve",
  "tempestade",
  "arcoiris",
  "foguete",
  "computador",
  "telefone",
  "relógio",
  "espelho",
  "janela",
  "cadeira",
  "mesa",
  "livro",
  "caneta",
  "coragem",
  "alegria",
  "tristeza",
  "paz",
  "amizade",
  "esperança",
  "sonho",
  "verdade",
  "liberdade",
  "felicidade",
];

  function iniciarNovoJogo() {
    const palavraEscolhida =
      listaDePalavras[Math.floor(Math.random() * listaDePalavras.length)];
    setPalavraSecreta(palavraEscolhida.split(""));
    setLetrasCorretas(Array(palavraEscolhida.length).fill("_"));
    setTentativasRestantes(6);
    setLetrasJaTentadas([]);
  }

  function verificarLetra(letra: string) {
    if (letrasJaTentadas.includes(letra)) return;

    setLetrasJaTentadas((prev) => [...prev, letra]);

    if (palavraSecreta.includes(letra)) {
      setLetrasCorretas((prev) =>
        prev.map((l, i) => (palavraSecreta[i] === letra ? letra : l))
      );
    } else {
      setTentativasRestantes((prev) => prev - 1);
    }
  }

  function finalizarJogo() {
    Alert.alert("A palavra era:", palavraSecreta.join(""));
    iniciarNovoJogo();
  }

  const jogadorVenceu = letrasCorretas.length > 0 && !letrasCorretas.includes("_");
  const jogadorPerdeu = tentativasRestantes <= 0;

  return (
    <View style={styles.container}>
      {palavraSecreta.length === 0 ? (
        <Botao onPress={iniciarNovoJogo} title="Começar Jogo" />
      ) : (
        <View>
          <View style={styles.forca}>
            <Pessoa erros={6 - tentativasRestantes} />

            <View style={styles.palavra}>
              {letrasCorretas.map((letra, index) => (
                <Text key={index} style={styles.textoPalavra}>
                  {letra}
                </Text>
              ))}
            </View>
          </View>

          <View>
            {jogadorPerdeu ? (
              <Text style={styles.textoResultado}>Você perdeu!</Text>
            ) : jogadorVenceu ? (
              <Text style={styles.textoResultado}>Parabéns! Você venceu!</Text>
            ) : (
              <View style={styles.teclado}>
                {alfabeto.map((letra) => (
                  <BotaoAlfabeto
                    key={letra}
                    title={letra}
                    onPress={() => verificarLetra(letra)}
                    disabled={letrasJaTentadas.includes(letra)}
                    style={[
                      letrasJaTentadas.includes(letra) && styles.botaoUsado,
                    ]}
                  />
                ))}
              </View>
            )}

            <Botao onPress={finalizarJogo} title="Jogar Novamente" />
          </View>
        </View>
      )}
    </View>
  );
}