const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./agendamentos-20624-firebase-adminsdk-dt65v-0c6e4ee7cb.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

const data = {
    name: 'Natal',
    state: 'Rio Grande do Norte',
    country: 'Brasil'
}

const res = db.collection('agendamentos').doc('NA').set(data)0