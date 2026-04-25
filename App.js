import react from "react";
import { View, Text } from "react-native";

function App() {
  const TITULO = "VARIÁVEIS EM REACT NATIVE";
  const PARAGRAFO =
    "VARIÁVEIS SÃO ESPAÇOS DE MEMÓRIA DO COMPUTADOR DESTINADOS A \ DADOS QUE SÃO MANIPULADOS E ALTERADOS DURANTE A EXECUÇÃO DE UM \ ALGORITIMO. \NLOGO, PARA QUE O RESULTADO SEJA O ESPERADO, É PRECISO \ CONSIDERAR O TIPO DE DADOS QUE SERÁ ARMAZENADO E TAMBÉM DEFINIR O \ NOME DAS VARIÁVEIS";
  const RODAPÉ1 = "HENRIQUE BARRETO SILVA";
  const RODAPÉ2 = "2026";

  return (
    <View style={{
      flex:1,backgroundColor:'powderblue',
      paddingVertical:30, paddingHorizontal:20
    }}>
      <View style={{flexDirection:"column", height:'20%',width:'100%',
        backgroundColor:'skyblue', justifyContent:'center'
      }}>
        <Text style={{fontSize:26, fontFamily:"Times",textAlign:"center"}}>{TITULO}</Text>
      </View>
      <View style={{height: '70%',marginTop:'10px',backgroundColor:"purple",
      padding:"10%"
      }}>
        <Text style={{fontSize:20,textAlign:"justify"}}>{PARAGRAFO}</Text>
      </View>
      <View style={{height:"10%",flexDirection:"row",justifyContent:"space-around",
        backgroundColor:"skyblue",marginTop:"10px",alignItems:"center"
      }}>
        <Text style={{fontSize:25,fontWeight:"bold",color:"red"}}>{RODAPÉ1}</Text>
        <Text style={{fontSize: 30,fontStyle:'italic'}}>{RODAPÉ2}</Text>
      </View>
    </View>
  );
}

export default App;
