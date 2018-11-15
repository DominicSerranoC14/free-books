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
                    :disabled="savingExpenseYear"
                    class="btn btn-outline-primary"
                    type="button"
                    @click="handleSaveClick">
                    Save
                    <i 
                        v-if="savingExpenseYear" 
                        class="fa fa-spinner fa-spin"
                    />
                </button>
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
            savingExpenseYear: false
        }
    },

    methods: {
        async handleSaveClick() {
            this.savingExpenseYear = true;
            const newExspenseYear = await this.$createExpenseYear(this.expenseYear);
            
            if (newExspenseYear) this.addExpenseYear(newExspenseYear);
            this.savingExpenseYear = false;
        }
    }
}
</script>

<style scoped>

</style>


