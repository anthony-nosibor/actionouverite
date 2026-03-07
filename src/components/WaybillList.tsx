import { StyleSheet, Text, View } from 'react-native';
import type { Waybill } from '../types/waybill';

type Props = {
  items: Waybill[];
};

export function WaybillList({ items }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Courses planifiées</Text>
      {items.length === 0 ? (
        <Text style={styles.empty}>Aucune livraison pour le moment.</Text>
      ) : (
        items.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.patient}>{item.patientName}</Text>
            <Text>{item.address}</Text>
            <Text>{item.medication}</Text>
            <Text style={styles.meta}>Date: {item.deliveryDate}</Text>
            <Text style={styles.meta}>Statut: {item.status}</Text>
            {item.notes ? <Text style={styles.note}>Note: {item.notes}</Text> : null}
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    gap: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
  },
  empty: {
    color: '#686868',
  },
  card: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#efefef',
    gap: 3,
  },
  patient: {
    fontWeight: '700',
    fontSize: 15,
  },
  meta: {
    color: '#4a4a4a',
    fontSize: 13,
  },
  note: {
    marginTop: 4,
    color: '#5c5c5c',
  },
});
