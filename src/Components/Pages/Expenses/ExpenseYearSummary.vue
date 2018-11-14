<template>
    <div>
        <h4 v-if="!selectedExpenseYear">Please select and expense year to view.</h4>

        <h4 v-if="selectedExpenseYear">Expenses for {{ selectedExpenseYear }}</h4>

        <hr>
    </div>
</template>

<script>
export default {
    props: {
        selectedExpenseYear: { type: String, default: () => '' }
    }
}
</script>
