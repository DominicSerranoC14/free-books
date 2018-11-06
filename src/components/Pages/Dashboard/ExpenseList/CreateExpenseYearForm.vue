<template>
    <div>
        <h5>Create an expense year.</h5>

        <div class="input-group">
            <input 
                :max="currentYear"
                v-model="expenseYear"
                type="number"
                min="2000"
                class="form-control">

            <div class="input-group-append">
                <button 
                    class="btn btn-outline-primary"
                    type="button" 
                    @click="handleSaveClick">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import ExpenseYearMixins from '@/Services/Collections/expenseYears';

const currentYear = moment().format('YYYY');

export default {
    mixins: [ ExpenseYearMixins ],

    props: {
        addExpenseYear: { type: Function, required: true }
    },

    data() {
        return {
            currentYear,
            expenseYear: currentYear,
        }
    },

    methods: {
        async handleSaveClick() {
            const newExspenseYear = await this.createExpenseYear(this.expenseYear);
            
            if (newExspenseYear) this.addExpenseYear(newExspenseYear);
        }
    }
}
</script>

<style scoped>

</style>


