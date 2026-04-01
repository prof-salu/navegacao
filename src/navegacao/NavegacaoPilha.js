import TelaInicial from "../telas/TelaInicial";
import TelaConfiguracoes from "../telas/TelaConfiguracoes";
import TelaDetalhes from "../telas/TelaDetalhes";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function NavegacaoPilha(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={TelaInicial} />
            <Stack.Screen name='Detalhes' component={TelaDetalhes} />
            <Stack.Screen name='Configuracoes' component={TelaConfiguracoes} />
        </Stack.Navigator>
    );
}