import { View, Text, Button, StyleSheet } from 'react-native';

export default function PerfilScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla de Incio</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0f0ff'
    },
    title: {
        fontSize: 24,
        /* fontWeight: 'bold', */
        marginBottom: 20
    }
});