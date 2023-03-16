import { collection, getDoc, getDocs, doc, addDoc } from "@firebase/firestore";
import { db } from '../config/firebaseConfig';

const productsCollection = collection(db, 'product');
const ordersCollection = collection(db, 'order');

export const getProductsFromFirebase = async () => {
    const data = await getDocs(productsCollection);
    return data.docs.map(product => ({
        ...product.data(),
        id: product.id
    }));
}

export const getOrdersFromFirebase = async () => {
    const data = await getDocs(ordersCollection);
    return data.docs.map(order => ({
        ...order.data(),
        id: order.id
    }));
}

export const getOrderFromFirebase = async (orderId) => {
    return await getDoc(doc(db, 'order', orderId));
}

export const getProductFromFirebase = async (productId) => {
    return await getDoc(doc(db, 'product', productId))
}

export const saveOrder = async (order) => {
    return await addDoc(ordersCollection, order);
}

export const createProductReference = (productId) => {
    return doc(db, 'product/' + productId);
}