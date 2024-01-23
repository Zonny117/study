import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
  Timestamp,
  deleteDoc,
  updateDoc,
  orderBy,
  query,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 모든 할일 가져오기
export async function fetchTodos() {
  const todosREf = collection(db, 'todos');
  const q = query(todosREf, orderBy('created_at', 'desc'));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return [];
  }
  const fetchedTodos = [];
  querySnapshot.forEach(doc => {
    console.log(doc.id, ' => ', doc.data());

    const aTodo = {
      id: doc.id,
      title: doc.data()['title'],
      is_done: doc.data()['is_done'],
      created_at: doc.data()['created_at'].toDate(),
    };

    fetchedTodos.push(aTodo);
  });

  return fetchedTodos;
}

// 할일 추가
export async function addATodo({ title }) {
  const newTodoRef = doc(collection(db, 'todos'));

  const createdAtTimestamp = Timestamp.fromDate(new Date());

  const newTodoData = {
    id: newTodoRef.id,
    title: title,
    is_done: false,
    created_at: createdAtTimestamp,
  };

  await setDoc(newTodoRef, newTodoData);

  return {
    id: newTodoRef.id,
    title: title,
    is_done: false,
    created_at: createdAtTimestamp.toDate(),
  };
}

// 단일 할일 조회
export async function fetchATodo(id) {
  if (id === null) {
    return null;
  }

  const docRef = doc(db, 'todos', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());

    const fetchedTodo = {
      id: docSnap.id,
      title: docSnap.data()['title'],
      is_done: docSnap.data()['is_done'],
      created_at: docSnap.data()['created_at'].toDate(),
    };

    return fetchedTodo;
  } else {
    console.log('No such document!');
    return null;
  }
}

// 단일 할일 삭제
export async function deleteATodo(id) {
  if (id === null) {
    return null;
  }

  const fetchedTodo = await fetchATodo(id);

  if (fetchedTodo === null) {
    return null;
  } else {
    await deleteDoc(doc(db, 'todos', id));
    return fetchedTodo;
  }
}

// 단일 할일 수정
export async function editATodo(id, { title, is_done }) {
  if (id === null) {
    return null;
  }

  const fetchedTodo = await fetchATodo(id);

  if (fetchedTodo === null) {
    return null;
  }

  const todoRef = doc(db, 'todos', id);

  await updateDoc(todoRef, {
    title: title,
    is_done: is_done,
  });

  return {
    id: id,
    title: title,
    is_done: is_done,
    created_at: fetchedTodo.created_at,
  };
}

module.exports = { fetchTodos, addATodo, fetchATodo, deleteATodo, editATodo };
