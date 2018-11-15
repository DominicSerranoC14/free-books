<template>
    <div>
        <h5>Select an expense year to view.</h5>

        <div class="list-group">
            <button 
                v-for="({ year }) in sortedExpenseYears"
                :key="year"
                :class="`list-group-item list-group-item-action text-center py-2 ${checkIsActive(year)}`"
                @click="setExpenseYear(year)">{{ year }}</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        allExpenseYears: { type: Array, required: true },
        selectedExpenseYear: { type: String, default: () => '' },
        setExpenseYear: { type: Function, required: true }
    },

    computed: {
        sortedExpenseYears() {
            const expenseYearsCopy = [ ...this.allExpenseYears ];

            return expenseYearsCopy.sort((a, b) => b.year - a.year);
        }
    },

    methods: {
        checkIsActive(year) {
            return this.selectedExpenseYear === year ? 'active' : '';
        }
    }
}
</script>


