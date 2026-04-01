//local --> /src/telas/TelaDetalhes.js
import {View, Text, StyleSheet} from 'react-native';

export default function TelaDetalhes({route}){
    const {id, nome} = route.params || {};
    return(
        <View>
            <Text style={styles.titulo}>Tela Detalhes</Text>
            <Text>ID: {id}</Text>
            <Text>Nome: {nome}</Text>
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