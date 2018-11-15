<template>
    <div>
        <h4 v-if="!expenseItems.length">There are currently no items for this expense year.</h4>

        <v-client-table 
            :columns="tableColumns"
            :data="expenseItems"
            :options="tableOptions"
        >
            <span 
                slot="date" 
                slot-scope="props">{{ formatItemDate(props.row.date) }}
            </span>
            
            <span 
                slot="mileage" 
                slot-scope="props">{{ props.row.mileage ? props.row.mileage : 'N/A' }}
            </span>

            <span
                slot="actions"
                slot-scope="props">
                <expense-item-action-row 
                    :row="props.row" 
                    :remove-expense-item="removeExpenseItem"
                />
            </span>
        </v-client-table>

    </div>
</template>

<script>
import moment from 'moment';

import ExpenseItemActionRow from './ExpenseItemActionRow';

export default {
    components: { ExpenseItemActionRow },

    props: {
        expenseItems: { type: Array, default: () => [] },
        removeExpenseItem: { type: Function, required: true }
    },

    data() {
        return {
            tableColumns: [ 'amount', 'mileage', 'category', 'date', 'actions' ],
            tableOptions: {
                sortable: [ 'amount', 'mileage', 'category', 'date' ]
            }
        }
    },

    methods: {
        formatItemDate(date) {
            return moment(date).format('MM/DD/YYYY');
        },
    }
}
</script>


