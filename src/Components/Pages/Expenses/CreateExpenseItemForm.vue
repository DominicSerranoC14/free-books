<template>
    <div class="row py-3">
        <h5 class="col-md-12">Create an expense item.</h5>

        <div class="col-md-12">
            <div class="form-group">
                <label for="date">Date</label>

                <input 
                    id="date"
                    :max="expenseEndDate"
                    :min="expenseStartDate"
                    v-model="expenseItem.date"
                    type="date"
                    class="form-control">
            </div>
        </div>

        <div class="col-md-12">
            <div class="form-group">
                <label for="amount">Amount (USD)</label>

                <input 
                    id="amount"
                    v-model="expenseItem.amount"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    class="form-control">
            </div>
        </div>

        <div class="col-md-12">
            <div class="form-group">
                <label for="mileage">
                    Mileage
                    <span class="small text-muted">Standard Mileage Deduction Only</span>
                </label>

                <input 
                    id="mileage"
                    v-model="expenseItem.mileage"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    class="form-control">
            </div>
        </div>

        <div class="col-md-12">
            <div class="form-group">
                <label for="categories">
                    Category
                    <a 
                        href="https://blog.stridehealth.com/post/top-1099-write-offs" 
                        class="small text-muted">About Categories</a>
                </label>

                <select 
                    v-model="expenseItem.category" 
                    name="categories"
                    class="form-control">
                    <option value="0">--</option>
                    <option 
                        v-for="({ value }) in expenseCategories"
                        :key="value"
                        :value="value">
                        {{ value }}
                    </option>
                </select>
            </div>
        </div>

        <div class="col-md-12">
            <button 
                :disabled="createIsDisabled" 
                class="btn btn-primary"
                @click="handleCreateExpense">Save</button>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

import expenseItemsMixin from '@/Services/Collections/expenseItems';

const todaysDate = moment();

export default {
    mixins: [ expenseItemsMixin ],

    props: {
        expenseCategories: { type: Array, default: null }
    },

    data() {
        return {
            currentYear: todaysDate.format('YYYY'),
            expenseItem: {
                amount: '',
                category: '0',
                date: ''
            },
            expenseEndDate: todaysDate.endOf('year').format('YYYY-MM-DD'),
            expenseStartDate: todaysDate.startOf('year').format('YYYY-MM-DD')
        }
    },

    computed: {
        createIsDisabled() {
            const { amount, category, date } = this.expenseItem;

            return (!amount || !date || category === '0');
        }
    },

    methods: {
        async handleCreateExpense() {
            const expenseItem = await this.$createExpenseItem(this.expenseItem);
            console.log(expenseItem);
        }
    }
}
</script>

<style lang="scss" scoped>
button:disabled {
    background: grey;
    border: grey;
    
    &:hover {
        cursor: pointer;
    }
}
</style>
