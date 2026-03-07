import { useMemo, useState } from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import type { NewWaybill } from '../types/waybill';

const initialForm: NewWaybill = {
  patientName: '',
  address: '',
  medication: '',
  deliveryDate: '',
  status: 'à faire',
  notes: '',
};

type Props = {
  onSubmit: (payload: NewWaybill) => Promise<void>;
};

export function WaybillForm({ onSubmit }: Props) {
  const [form, setForm] = useState<NewWaybill>(initialForm);
  const [isLoading, setIsLoading] = useState(false);

  const isInvalid = useMemo(
    () =>
      !form.patientName.trim() ||
      !form.address.trim() ||
      !form.medication.trim() ||
      !form.deliveryDate.trim(),
    [form],
  );

  const handleSubmit = async () => {
    if (isInvalid) {
      Alert.alert('Champs manquants', 'Merci de compléter les champs obligatoires.');
      return;
    }

    try {
      setIsLoading(true);
      await onSubmit(form);
      setForm(initialForm);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Erreur inconnue';
      Alert.alert('Impossible d’enregistrer', message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nouvelle lettre de voiture</Text>
      <TextInput
        placeholder="Nom du patient"
        value={form.patientName}
        onChangeText={(value) => setForm((prev) => ({ ...prev, patientName: value }))}
        style={styles.input}
      />
      <TextInput
        placeholder="Adresse de livraison"
        value={form.address}
        onChangeText={(value) => setForm((prev) => ({ ...prev, address: value }))}
        style={styles.input}
      />
      <TextInput
        placeholder="Médicament / colis"
        value={form.medication}
        onChangeText={(value) => setForm((prev) => ({ ...prev, medication: value }))}
        style={styles.input}
      />
      <TextInput
        placeholder="Date (ex: 2026-03-08)"
        value={form.deliveryDate}
        onChangeText={(value) => setForm((prev) => ({ ...prev, deliveryDate: value }))}
        style={styles.input}
      />
      <TextInput
        placeholder="Notes"
        value={form.notes}
        onChangeText={(value) => setForm((prev) => ({ ...prev, notes: value }))}
        style={[styles.input, styles.notes]}
        multiline
      />

      <Pressable
        style={[styles.button, (isInvalid || isLoading) && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={isInvalid || isLoading}
      >
        <Text style={styles.buttonLabel}>{isLoading ? 'Envoi...' : 'Enregistrer'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    gap: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d7d7d7',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fafafa',
  },
  notes: {
    minHeight: 70,
    textAlignVertical: 'top',
  },
  button: {
    marginTop: 4,
    backgroundColor: '#1a73e8',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonLabel: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
});
