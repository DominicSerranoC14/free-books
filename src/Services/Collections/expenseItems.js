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
    }
}