import { getCurrentUserUid } from '@/Services/Firebase/auth.js';
import { createDocument, fetchCollection, mapDocuments } from '@/Services/Firebase/collection.js';

const EXPENSE_YEARS = 'expenseYears';

export default {
    methods: {
        async $createExpenseYear(year) {
            try {
                const { docs } = await fetchCollection(EXPENSE_YEARS)
                    .where('uid', '==', getCurrentUserUid())
                    .where('year', '==', year).get();
                
                // Do not allow duplicate expense years for individual users
                if (mapDocuments(docs, 'year').includes(year)) {
                    throw new Error('Expense year already exists.');
                }

                return await createDocument(EXPENSE_YEARS, { year, uid: getCurrentUserUid() });
            } catch (error) {
                this.$swal('Error', error.message, 'error');
            }
        },

        async $getAllExpenseYears() {
            try {
                const { docs } = await fetchCollection(EXPENSE_YEARS)
                    .where('uid', '==', getCurrentUserUid()).get();

                return mapDocuments(docs);
            } catch (error) {
                this.$swal('Error', error.message, 'error');
            }
        }
    },
}