<template>
    <div class="row flex-column px-3">
        <create-expense-year-form :add-expense-year="addExpenseYear" />

        <loader 
            v-if="!allExpenseYears" 
            class="my-4" />

        <div 
            v-if="allExpenseYears && !allExpenseYears.length" 
            class="my-4">
            No current expense years, please create one.
        </div>

        <div 
            v-if="allExpenseYears && allExpenseYears.length" 
            class="my-4">
            <expense-year-list 
                :all-expense-years="allExpenseYears"
                :selected-expense-year="selectedExpenseYear"
                :set-expense-year="setExpenseYear"
            />
        </div>
    </div>
</template>

<script>
import CreateExpenseYearForm from './CreateExpenseYearForm';
import ExpenseYearList from './ExpenseYearList';
import Loader from '@/Components/Global/Loader';

export default {
    components: { CreateExpenseYearForm, ExpenseYearList, Loader },

    props: {
        addExpenseYear: { type: Function, required: true },
        allExpenseYears: { type: Array, default: () => [] },
        setExpenseYear: { type: Function, required: true },
        selectedExpenseYear: { type: String, default: () => '' }
    }
}
</script>


