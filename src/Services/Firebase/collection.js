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

export const fetchCollection = collection => db.collection(collection);

/**
 * Return a formatted array of document object values. 
 * 
 * If a documentKey is passed in, only the values matching the documentKey on the document object will be returned.
 * 
 * @param {Array} documents
 * @param {String} documentKey 
 */
export const mapDocuments = (documents, documentKey = null) => (
    documents.map(document => {
        const data = document.data();

        return documentKey ? data[documentKey] : data;
    })
);