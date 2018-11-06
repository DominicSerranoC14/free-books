<template>
    <div class="d-flex flex-column border">
        <create-expense-year-form 
            :add-expense-year="addExpenseYear"
            class="my-4" />

        <div 
            v-if="allExpenseYears.length" 
            class="my-4">
            <expense-year-list :all-expense-years="allExpenseYears" />
        </div>
    </div>
</template>

<script>
import CreateExpenseYearForm from './CreateExpenseYearForm';
import ExpenseYearList from './ExpenseYearList';
import ExpenseYearMixins from '@/Services/Collections/expenseYears';

export default {
    components: { CreateExpenseYearForm, ExpenseYearList },

    mixins: [ ExpenseYearMixins ],

    data() {
        return {
            allExpenseYears: [],
            expenses: [],
        }
    },

    async mounted() {
        this.allExpenseYears = await this.getAllExpenseYears();
    },

    methods: {
        addExpenseYear(year) {
            this.allExpenseYears.push(year);
        },
    }
}
</script>

<style scoped>

</style>


