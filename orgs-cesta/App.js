
import { StatusBar , SafeAreaView, View} from 'react-native';
import Cesta from './src/Telas/Cesta/index.js';
import Mock from "./src/Mocks/cesta.js"
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import Apploading from "expo-app-loading"

export default function App() {
  const [fonteCarregada] = useFonts({
    "MonteSerratRegular": Montserrat_400Regular,
    "MontSerratBold": Montserrat_700Bold,
  });

  if(!fonteCarregada)
  {
    return <Apploading />
  }

  return (
    <SafeAreaView style={{flex : 1}}> 
    <StatusBar />
      <Cesta {...Mock} />
    </SafeAreaView>
  );
}


/* style={styles.container}> */
/*{const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});}*/
