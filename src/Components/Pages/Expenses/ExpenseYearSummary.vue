<template>
    <div>
        <h4 v-if="!selectedExpenseYear">Please select and expense year to view.</h4>

        <h4 v-if="selectedExpenseYear">Expenses for {{ selectedExpenseYear }}</h4>

        <hr>

        <template v-if="annualTotal">
            <h6>Annual Expense Total: ${{ annualTotal }}</h6>

            <hr>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        annualTotal: { type: String, default: () => '' },
        selectedExpenseYear: { type: String, default: () => '' }
    }
}
</script>
