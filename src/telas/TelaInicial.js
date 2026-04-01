//local --> /src/telas/TelaInicial.js
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import {useState} from 'react';

export default function TelaInicial({navigation}){
    const [url, setUrl] = useState('');
    return(
        <View>
            <Text style={styles.titulo}>Tela Inicial</Text>
            <Button title='Ir para Detalhes' 
                    onPress={() => navigation.navigate('Detalhes', 
                                                        {id : '1001',
                                                         nome : 'Juca'
                                                        }
                    )}/>
            
            <Button title='Configurações' color={'red'}
                    onPress={() => navigation.navigate('Configuracoes', 
                                                        {url : url}
                    )}/>

            <TextInput 
                style={styles.entrada}
                placeholder='Informe a URL'
                value={url}
                onChangeText={setUrl}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    }, titulo: {
        fontSize: 20, marginBottom: 20, fontWeight: 'bold', textAlign: 'center'
    }, entrada: {
        borderWidth: 1, fontSize: 16, padding: 5, margin: 5,
    }
})