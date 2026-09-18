import React from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native';

export default function DetalleScreen({ route, navigation }) {
  const perfil = route?.params?.perfil || {
    nombre: 'Pepe Martinez',
    bio: 'Ingeniero en Mecatrónica',
    correo: 'usuario@dominio.com',
    celular: '000 000 00 00',
  };

  return (
    <ScrollView style={styles.pantalla}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
            }}
            style={styles.logo}
          />

          <Text style={styles.nombre}>{perfil.nombre}</Text>
          <Text style={styles.bio}>{perfil.bio}</Text>
        </View>

        <View style={styles.contentCard}>
          <Text style={styles.label}>Correo</Text>
          <Text style={styles.value}>{perfil.correo}</Text>

          <Text style={styles.label}>Celular</Text>
          <Text style={styles.value}>{perfil.celular}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Editar datos" onPress={() => navigation.navigate('Formulario')} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#d1d5db',
  },
  container: {
    width: '90%',
    maxWidth: 400,
    alignSelf: 'center',
    marginVertical: 40,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 16,
  },
  card: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  nombre: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
  },
  bio: {
    fontSize: 16,
    color: '#4b5563',
    marginTop: 6,
    textAlign: 'center',
  },
  contentCard: {
    marginTop: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    color: '#111827',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    padding: 12,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
