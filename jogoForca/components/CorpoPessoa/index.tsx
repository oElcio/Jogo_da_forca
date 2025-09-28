// CorpoPessoa/index.tsx
import { View } from "react-native";
import { styles } from "./styles";

export default function CorpoPessoa({ erros }: { erros: number }) {
  return (
    <View style={styles.bonecoContainer}>
    
      {erros >= 1 && <View style={styles.cabeca} />}


      <View style={styles.corpoContainer}>

        {erros >= 2 && <View style={styles.corpo} />}

  
        <View style={styles.bracosContainer}>
          {erros >= 3 && <View style={styles.bracoEsquerdo} />}
          {erros >= 4 && <View style={styles.bracoDireito} />}
        </View>

   
        <View style={styles.pernasContainer}>
          {erros >= 5 && <View style={styles.pernaEsquerda} />}
          {erros >= 6 && <View style={styles.pernaDireita} />}
        </View>
      </View>
    </View>
  );
}