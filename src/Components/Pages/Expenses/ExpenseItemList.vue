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
        </v-client-table>

    </div>
</template>

<script>
import moment from 'moment';

export default {
    props: {
        expenseItems: { type: Array, default: () => [] }
    },

    data() {
        return {
            tableColumns: [ 'amount', 'mileage', 'category', 'date' ],
            tableOptions: {
                sortable: [ 'amount', 'mileage', 'category', 'date' ]
            }
        }
    },

    methods: {
        formatItemDate(date) {
            return moment(date).format('MM/DD/YYYY');
        }
    }
}
</script>

