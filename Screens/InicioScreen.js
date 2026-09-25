import { ScrollView, View, Text, Button, StyleSheet } from 'react-native';

export default function InicioScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.container}>
                <Text style={styles.title}>Bienvenido</Text>
                <Text style={styles.subtitle}>
                    Aquí puedes navegar entre el inicio, formulario y detalle.
                </Text>

                <View style={styles.buttonGroup}>
                    <Button
                        title="Ir al formulario"
                        onPress={() => navigation.navigate('Formulario')}
                    />
                </View>

                <View style={styles.buttonGroup}>
                    <Button
                        title="Ver detalle"
                        onPress={() => navigation.navigate('Detalle')}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f3f4f6',
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 10,
        color: '#111827',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#374151',
        marginBottom: 28,
    },
    buttonGroup: {
        width: '100%',
        maxWidth: 300,
        marginBottom: 12,
    },
});