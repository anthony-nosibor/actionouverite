import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp
} from "firebase/firestore";
import { auth, db } from "./src/firebase";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    patientName: "",
    address: "",
    medication: "",
    quantity: "",
    deliveryDate: ""
  });
  const [waybills, setWaybills] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        await signInAnonymously(auth);
        return;
      }
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const waybillQuery = query(collection(db, "waybills"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(waybillQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setWaybills(data);
    });

    return unsubscribe;
  }, []);

  const isFormValid = useMemo(() => {
    return Object.values(form).every((value) => value.trim().length > 0);
  }, [form]);

  const updateField = (field, value) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const createWaybill = async () => {
    if (!isFormValid || !user) {
      return;
    }

    try {
      await addDoc(collection(db, "waybills"), {
        ...form,
        status: "À livrer",
        driverId: user.uid,
        createdAt: serverTimestamp()
      });

      setForm({
        patientName: "",
        address: "",
        medication: "",
        quantity: "",
        deliveryDate: ""
      });
    } catch (error) {
      Alert.alert("Erreur", "Impossible d'enregistrer la lettre de voiture.");
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.centered}>
        <ActivityIndicator size="large" color="#3E6AE1" />
        <Text>Connexion sécurisée en cours…</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Lettre de voiture - Livraison médicaments</Text>
      <Text style={styles.subtitle}>Chauffeur connecté : {user?.uid}</Text>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Nom du patient"
          value={form.patientName}
          onChangeText={(text) => updateField("patientName", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Adresse de livraison"
          value={form.address}
          onChangeText={(text) => updateField("address", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Médicament"
          value={form.medication}
          onChangeText={(text) => updateField("medication", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantité"
          value={form.quantity}
          onChangeText={(text) => updateField("quantity", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Date de livraison (JJ/MM/AAAA)"
          value={form.deliveryDate}
          onChangeText={(text) => updateField("deliveryDate", text)}
        />

        <TouchableOpacity
          style={[styles.button, !isFormValid && styles.buttonDisabled]}
          disabled={!isFormValid}
          onPress={createWaybill}
        >
          <Text style={styles.buttonText}>Créer la lettre de voiture</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.listTitle}>Courses à traiter</Text>
      <FlatList
        data={waybills}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text>Aucune course pour le moment.</Text>}
        renderItem={({ item }) => (
          <View style={styles.waybillItem}>
            <Text style={styles.waybillPatient}>{item.patientName}</Text>
            <Text>{item.medication} • Qté: {item.quantity}</Text>
            <Text>{item.address}</Text>
            <Text>Livraison prévue: {item.deliveryDate}</Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: "#F2F5FB"
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
    color: "#1F2A44"
  },
  subtitle: {
    color: "#5E6A85",
    marginBottom: 12
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 2
  },
  input: {
    borderWidth: 1,
    borderColor: "#D9E0F1",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: "#FAFCFF"
  },
  button: {
    backgroundColor: "#3E6AE1",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center"
  },
  buttonDisabled: {
    backgroundColor: "#A7B9EB"
  },
  buttonText: {
    color: "white",
    fontWeight: "600"
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#1F2A44"
  },
  list: {
    paddingBottom: 20
  },
  waybillItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E3E9F8"
  },
  waybillPatient: {
    fontWeight: "700",
    marginBottom: 4
  },
  status: {
    marginTop: 4,
    color: "#2754CC",
    fontWeight: "600"
  }
});
