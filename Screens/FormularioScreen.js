import React, { useState } from 'react';
import { ScrollView, View, Image, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function FormularioScreen({ navigation }) {
  const [nombre, setNombre] = useState('Pepe Martinez');
  const [bio, setBio] = useState('Ingeniero en Mecatrónica');
  const [correo, setCorreo] = useState('usuario@dominio.com');
  const [celular, setCelular] = useState('000 000 00 00');

  const guardarCambios = () => {
    const perfil = {
      nombre: nombre || 'Pepe Martinez',
      bio: bio || 'Ingeniero en Mecatrónica',
      correo: correo || 'usuario@dominio.com',
      celular: celular || '000 000 00 00',
    };

    navigation.navigate('Detalle', { perfil });
  };

  return (
    <ScrollView style={styles.pantalla}>
      <View style={styles.container}>
        <View style={styles.car}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
            }}
            style={styles.logo}
          />
          <Text style={styles.nombre}>{nombre}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>

        <View style={styles.contentcard}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.input}
            value={nombre}
            onChangeText={setNombre}
            placeholder="Nombre completo"
          />

          <Text style={styles.label}>Profesión</Text>
          <TextInput
            style={styles.input}
            value={bio}
            onChangeText={setBio}
            placeholder="Tu profesión"
          />

          <Text style={styles.label}>Correo</Text>
          <TextInput
            style={styles.input}
            value={correo}
            onChangeText={setCorreo}
            placeholder="usuario@dominio.com"
            keyboardType="email-address"
          />

          <Text style={styles.label}>Celular</Text>
          <TextInput
            style={styles.input}
            value={celular}
            onChangeText={setCelular}
            placeholder="000 000 00 00"
            keyboardType="phone-pad"
          />

          <View style={styles.button}>
            <Button title="Guardar cambios" onPress={guardarCambios} />
          </View>
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
    padding: 10,
  },
  car: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bio: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  contentcard: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    marginTop: 10,
  },
});
