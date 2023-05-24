import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, addDoc, getDoc, onSnapshot, query, where, getDocs, orderBy, limit, deleteDoc, updateDoc } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBvDOcXN_bU8aNNk-65pKayt5OYTsNcvaM",
    authDomain: "agendamentos-20624.firebaseapp.com",
    projectId: "agendamentos-20624",
    storageBucket: "agendamentos-20624.appspot.com",
    messagingSenderId: "1076449273441",
    appId: "1:1076449273441:web:808b3099de597886736c20"
  };
  

const app = initializeApp(firebaseConfig);

const firestore = getFirestore();

const automoveis = doc(firestore, 'automoveis/17-04-2023');


function addNovaColecao() {
    const docData = {
        modelo: 'Hornet',
        marca: 'Honda',
        ano: 2012,
        km: 00,
        tipo: 'Moto',
        preco: (100 + Math.floor(Math.random() * 400)) / 100
    };
    setDoc(automoveis, docData, { merge: true })

        .then(() => {
            console.log('Carro foi adicionado ao catálogo.');
        })
        .catch((error) => {
            console.log('Ocorreu um erro: ${error}');
        });
}


const orderCollection = collection(firestore, 'veiculos');

async function addNovoDocumento() {
    const newDoc = await addDoc(orderCollection, {
        modelo: 'Monza',
        marca: 'Fiat',
        ano: 1994,
        km: 500,
        tipo: 'Carro',
        preco: (200 + Math.floor(Math.random() * 400)) / 100,
    })
    console.log(`Documento criado em ${newDoc.path}`);

}

async function readUnicoDocumento() {
    const mySnapshot = await getDoc(especialDoDia);
    if (mySnapshot.exists()) {
        const docData = mySnapshot.data();
        console.log(`O dado é: ${JSON.stringify(docData)}`);
    }
}

async function readVariosDocumentos() {
    const veiculosQuery = query(
        collection(firestore, 'veiculos'),
        where('marca', '==', 'Fiat'),
        orderBy('preco'),
        limit(10)
    );
    
    onSnapshot(veiculosQuery, (querySnapshot) => {
        console.log(JSON.stringify(querySnapshot.docs.map((e) => e.data())))
    })
}


async function deleteVeiculos() {
    const veiculossQuery = query(
        collection(firestore, 'veiculos'),
        where('marca', '==', 'fiat'),
        limit(10)
    );

    const querySnapshot = await getDocs(veiculosQuery);
    querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref)
            .then(() => {
                console.log('Cadastro excluído.');
            })
            .catch((error) => {
                console.log('Ocorreu um erro ao excluir o cadastro:', error);
            });
    });
}

async function updateVeiculos() {
    const veiculosQuery = query(
      collection(firestore, 'veiculos'),
      where('modelo', '==', 'Hornet'),
      limit(10)
    );
  
    const querySnapshot = await getDocs(veiculosQuery);
    querySnapshot.forEach((doc) => {
      const updatedData = {
        ano: '2018',
        preco: 8.5,
      };
  
      updateDoc(doc.ref, updatedData)
        .then(() => {
          console.log('Cadastro atualizado.');
        })
        .catch((error) => {
          console.log('Erro. Atualização não concluída', error);
        });
    });
  }
  
  console.log('Hello firebase.');



