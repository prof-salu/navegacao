//local --> /src/telas/TelaConfiguracoes.js
import {View, Text, StyleSheet} from 'react-native';

export default function TelaConfiguracoes({route}){
    //const {url} = route.params;
    return(
        <View>
            <Text style={styles.titulo}>Tela Configurações</Text> 
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    }, titulo: {
        fontSize: 20, marginBottom: 20, fontWeight: 'bold', textAlign: 'center'
    }
})