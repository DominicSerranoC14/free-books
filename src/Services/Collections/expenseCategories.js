import db from '@/Services/Firebase/database.js';

const EXPENSE_CATEGORIES = 'expenseCategories';

export default {
    methods: {
        async $getAllExpenseCategories() {
            try {
                const { docs } = await db.collection(EXPENSE_CATEGORIES)
                    .orderBy('value').get();

                return docs.map(doc => doc.data());
            } catch (error) {
                this.$swal('Error', error.message, 'error');
            }
        }
    }
}