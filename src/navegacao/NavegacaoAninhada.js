import TelaConfiguracoes from "../telas/TelaConfiguracoes";
import TelaDetalhes from "../telas/TelaDetalhes";
import TelaInicial from "../telas/TelaInicial";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavegacaoPilha from "./NavegacaoPilha";
import NavegacaoAbas from "./NavegacaoAbas";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function navegacaoPilha(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='TelaInicial' component={TelaInicial} 
            options={{title: 'Início'}}/>
            <Stack.Screen name='Detalhes' component={TelaDetalhes} />
        </Stack.Navigator>
    );
}

function navegacaoAbas(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name='Principal' component={navegacaoPilha} /> 
            <Tab.Screen name='Configurações' component={TelaConfiguracoes} />
        </Tab.Navigator>
    );
}

export default function NavegacaoAninhada(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="App" component={navegacaoAbas} 
                                        options={{title : 'Meu App'}}/>
            <Drawer.Screen name="Configurações" component={TelaConfiguracoes} />
        </Drawer.Navigator>
    );
}