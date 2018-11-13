<template>
    <div class="row">
        <div class="col-md-4">
            <div class="row">
                <div class="col-md-12 mb-4">
                    <expense-year-menu />
                </div>

                <div class="col-md-12">
                    <create-expense-item-form :expense-categories="expenseCategories" />
                </div>
            </div>
        </div>

        <div class="col-md-8"/>
    </div>
</template>

<script>
import CreateExpenseItemForm from '@/Components/Pages/Expenses/CreateExpenseItemForm';
import ExpenseYearMenu from '@/Components/Pages/Expenses/ExpenseYearMenu';

import expenseCategoriesMixin from '@/Services/Collections/expenseCategories';

export default {
    components: {
        CreateExpenseItemForm,
        ExpenseYearMenu
    },

    mixins: [ expenseCategoriesMixin ],

    data() {
        return {
            expenseCategories: null
        }
    },

    async mounted() {
        this.expenseCategories = await this.$getAllExpenseCategories();
    }
};
</script>

