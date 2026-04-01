import TelaInicial from "../telas/TelaInicial";
import TelaConfiguracoes from "../telas/TelaConfiguracoes";
import TelaDetalhes from "../telas/TelaDetalhes";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function NavegacaoAbas(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={TelaInicial} />
            <Tab.Screen name='Detalhes' component={TelaDetalhes} />
            <Tab.Screen name='Configuracoes' component={TelaConfiguracoes} />
        </Tab.Navigator>
    );
}