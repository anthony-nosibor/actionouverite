export type DeliveryStatus = 'à faire' | 'en cours' | 'livrée';

export type Waybill = {
  id: string;
  patientName: string;
  address: string;
  medication: string;
  deliveryDate: string;
  status: DeliveryStatus;
  notes?: string;
  createdAt?: Date;
};

export type NewWaybill = Omit<Waybill, 'id' | 'createdAt'>;
