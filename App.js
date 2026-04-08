import { NavigationContainer } from '@react-navigation/native';
import NavegacaoPilha from './src/navegacao/NavegacaoPilha';
import NavegacaoAbas from './src/navegacao/NavegacaoAbas';
import NavegacaoLateral from './src/navegacao/NavegacaoLateral';
import NavegacaoAninhada from './src/navegacao/NavegacaoAninhada';

export default function App() {
  return (
    <NavigationContainer>
      <NavegacaoAninhada />
    </NavigationContainer>
  );
}
