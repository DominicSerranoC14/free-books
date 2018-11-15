import { fetchCollection, mapDocuments } from '@/Services/Firebase/collection.js';

const EXPENSE_CATEGORIES = 'expenseCategories';

export default {
    methods: {
        async $getAllExpenseCategories() {
            try {
                const { docs } = await fetchCollection(EXPENSE_CATEGORIES)
                    .orderBy('value').get();

                return mapDocuments(docs);
            } catch (error) {
                this.$swal('Error', error.message, 'error');
            }
        }
    }
}