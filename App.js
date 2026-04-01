import { NavigationContainer } from '@react-navigation/native';
import NavegacaoPilha from './src/navegacao/NavegacaoPilha';
import NavegacaoAbas from './src/navegacao/NavegacaoAbas';

export default function App() {
  return (
    <NavigationContainer>
      <NavegacaoAbas />
    </NavigationContainer>
  );
}
