import db from '@/Services/Firebase/database.js';
import { getCurrentUserUid } from '@/Services/Firebase/auth.js';
import { createDocument } from '@/Services/Firebase/collection.js';

const EXPENSE_YEARS = 'expenseYears';

export default {
    methods: {
        async createExpenseYear(year) {
            try {
                const { docs } = await db.collection(EXPENSE_YEARS).where('year', '==', year).get();
                const expenseYears = docs.map(doc => doc.data().year);

                if (expenseYears.includes(year)) {
                    throw new Error('Expense year already exists.');
                }

                return await createDocument(EXPENSE_YEARS, { year, uid: getCurrentUserUid() });
            } catch (error) {
                this.$swal('Error', error.message, 'error');
            }
        },

        async getAllExpenseYears() {
            try {
                const { docs } = await db.collection(EXPENSE_YEARS).where('uid', '==', getCurrentUserUid()).get();

                return docs.map(doc => doc.data());
            } catch (error) {
                this.$swal('Error', error.message, 'error');
            }
        }
    },
}