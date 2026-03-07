import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import type { NewWaybill, Waybill } from '../types/waybill';

const WAYBILLS_COLLECTION = 'waybills';

export const subscribeToWaybills = (
  onData: (waybills: Waybill[]) => void,
  onError: (error: Error) => void,
) => {
  const q = query(collection(db, WAYBILLS_COLLECTION), orderBy('createdAt', 'desc'));

  return onSnapshot(
    q,
    (snapshot) => {
      const waybills = snapshot.docs.map((doc) => {
        const data = doc.data() as Omit<Waybill, 'id' | 'createdAt'> & {
          createdAt?: Timestamp;
        };

        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate(),
        } satisfies Waybill;
      });

      onData(waybills);
    },
    (error) => onError(error),
  );
};

export const createWaybill = async (payload: NewWaybill) => {
  await addDoc(collection(db, WAYBILLS_COLLECTION), {
    ...payload,
    createdAt: serverTimestamp(),
  });
};
