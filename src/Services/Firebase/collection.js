import db from '@/Services/Firebase/database.js';

export const createDocument = async (collection, payload) => {
    try {
        const ref = await db.collection(collection).add(payload);
        return await fetchDocument(ref);
    } catch (error) {
        throw new Error('Document could not be created.');
    }
}

export const fetchDocument = async documentRef => {
    try {
        const document = await documentRef.get();
        return document.exists ? document.data() : null;
    } catch (error) {
        throw new Error('Document could not be fetched.');  
    }
}
