import db from '@/Services/Firebase/database.js';
import { createDocument } from '@/Services/Firebase/collection.js';
import { getCurrentUserUid } from '@/Services/Firebase/auth.js';

const EXPENSE_ITEMS = 'expenseItems';

export default {
    methods: {
        async $createExpenseItem(payload) {
            try {
                const data = { ...payload, uid: getCurrentUserUid() };
                return await createDocument(EXPENSE_ITEMS, data);
            } catch (error) {
                this.$swal('Error', error.message, 'error');
            }
        },
        
        async $getExpenseItemsByYear(year) {
            try {
                const { docs } = await db.collection(EXPENSE_ITEMS)
                    .where('uid', '==', getCurrentUserUid())
                    .where('year', '==', year)
                    .orderBy('date', 'desc').get();

                // Return document with the unique document id
                return docs.map(doc => ({ ...doc.data(), id: doc.id }));
            } catch (error) {
                this.$swal('Error', error.message, 'error');
            }
        }
    }
}