import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { WaybillForm } from './src/components/WaybillForm';
import { WaybillList } from './src/components/WaybillList';
import { createWaybill, subscribeToWaybills } from './src/services/waybillService';
import type { NewWaybill, Waybill } from './src/types/waybill';

export default function App() {
  const [waybills, setWaybills] = useState<Waybill[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeToWaybills(
      (data) => {
        setWaybills(data);
        setError(null);
      },
      (snapshotError) => {
        setError(snapshotError.message);
      },
    );

    return unsubscribe;
  }, []);

  const handleCreateWaybill = async (payload: NewWaybill) => {
    await createWaybill(payload);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Action Vérité - Livraison médicaments</Text>
        <Text style={styles.subtitle}>
          Suivi des lettres de voiture pour votre activité de transport léger.
        </Text>

        {error ? <Text style={styles.error}>Erreur Firebase: {error}</Text> : null}

        <WaybillForm onSubmit={handleCreateWaybill} />
        <WaybillList items={waybills} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Données stockées dans Firebase Firestore.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f6fb',
  },
  container: {
    padding: 16,
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#4f4f4f',
    marginBottom: 14,
  },
  error: {
    color: '#b42318',
    marginBottom: 12,
    fontWeight: '600',
  },
  footer: {
    marginTop: 18,
    alignItems: 'center',
  },
  footerText: {
    color: '#6e6e6e',
  },
});
