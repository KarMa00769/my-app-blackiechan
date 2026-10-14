import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { getLicencia } from '../services/licenciaService';

// Componente externo OBLIGATORIO declarado fuera del componente principal
function InfoFila({ etiqueta, valor }) {
  return (
    <View style={styles.fila}>
      <Text style={styles.etiqueta}>{etiqueta}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  );
}

export default function LicenciaApiScreen() {
  const [licencia, setLicencia] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let pantallaActiva = true;

    async function cargarLicencia() {
      try {
        const datos = await getLicencia();
        if (pantallaActiva) {
          setLicencia(datos);
        }
      } catch {
        if (pantallaActiva) {
          setError(true);
        }
      } finally {
        if (pantallaActiva) {
          setCargando(false);
        }
      }
    }

    cargarLicencia();

    return () => {
      pantallaActiva = false;
    };
  }, []);

  if (cargando) {
    return (
      <SafeAreaView style={[styles.pantalla, styles.estadoPantalla]}>
        <ActivityIndicator size="large" color="#0077b6" />
        <Text style={styles.mensajeEstado}>Cargando licencia...</Text>
      </SafeAreaView>
    );
  }

  if (error || !licencia) {
    return (
      <SafeAreaView style={[styles.pantalla, styles.estadoPantalla]}>
        <Text style={styles.mensajeError}>
          No se pudo cargar la licencia. Revisa que la API esté activa y que la dirección sea accesible.
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.pantalla}>
      <View style={styles.contenedor}>
        <View style={styles.card}>
          <View style={styles.encabezado}>
            <Text style={styles.tituloEncabezado}>FONDO DE BIKINI</Text>
            <Text style={styles.subtituloEncabezado}>Licencia de Conducir</Text>
          </View>

          <View style={styles.filaPrincipal}>
            <Image
              source={{ uri: 'https://placekitten.com/150/150' }}
              style={styles.foto}
            />
            <View style={styles.datosPrincipales}>
              <Text style={styles.nombre}>{licencia.nombre}</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeTexto}>{licencia.estado}</Text>
              </View>
            </View>
          </View>

          <View style={styles.linea} />

          <InfoFila etiqueta="No. de Licencia" valor={licencia.numeroLicencia} />
          <InfoFila etiqueta="Fecha de Nacimiento" valor={licencia.fechaNacimiento} />
          <InfoFila etiqueta="Fecha de Vencimiento" valor={licencia.fechaVencimiento} />
          <InfoFila etiqueta="Tipo" valor={licencia.tipoLicencia} />
          <InfoFila etiqueta="Dirección" valor={licencia.direccion} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#e6f7ff' },
  estadoPantalla: { justifyContent: 'center', alignItems: 'center', padding: 24 },
  contenedor: { padding: 20 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  encabezado: { alignItems: 'center', marginBottom: 16 },
  tituloEncabezado: { fontSize: 12, letterSpacing: 2, color: '#0077b6', fontWeight: '700' },
  subtituloEncabezado: { fontSize: 18, fontWeight: 'bold', color: '#023e8a' },
  filaPrincipal: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  foto: { width: 90, height: 90, borderRadius: 12, marginRight: 16, borderWidth: 2, borderColor: '#0077b6' },
  datosPrincipales: { flex: 1 },
  nombre: { fontSize: 18, fontWeight: 'bold', color: '#03045e', marginBottom: 6 },
  badge: {
    backgroundColor: '#b7e4c7',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeTexto: { color: '#2d6a4f', fontSize: 12, fontWeight: '600' },
  linea: { height: 1, backgroundColor: '#ddd', marginVertical: 10 },
  fila: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 },
  etiqueta: { fontSize: 13, color: '#666' },
  valor: { fontSize: 13, fontWeight: '600', color: '#333', flexShrink: 1, textAlign: 'right' },
  mensajeEstado: { marginTop: 12, color: '#023e8a', fontSize: 15 },
  mensajeError: { color: '#9d0208', fontSize: 15, textAlign: 'center' },
});
