import TelaConfiguracoes from "../telas/TelaConfiguracoes";
import TelaDetalhes from "../telas/TelaDetalhes";
import TelaInicial from "../telas/TelaInicial";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function NavegacaoLateral(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Inicio' component={TelaInicial} />
            <Drawer.Screen name='Detalhes' component={TelaDetalhes} />
            <Drawer.Screen name='Configurações' component={TelaConfiguracoes} />
        </Drawer.Navigator>
    );
}