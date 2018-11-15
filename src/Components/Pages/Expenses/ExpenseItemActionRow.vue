<template>
    <div class="text-center">
        <i 
            v-if="!deletingItem"
            class="fa fa-trash text-danger" 
            @click="handleDeleteConfirmation"
        />

        <i 
            v-if="deletingItem" 
            class="fa fa-spinner fa-spin"
        />
    </div>
</template>

<script>
import swalMixin from '@/Services/swal';
import expenseItemsMixin from '@/Services/Collections/expenseItems';

export default {
    mixins: [ expenseItemsMixin, swalMixin ],

    props: {
        removeExpenseItem: { type: Function, required: true },
        row: { type: Object, required: true }
    },

    data() {
        return {
            deletingItem: false,
        }
    },

    methods: {
        async handleDeleteConfirmation() {
            const { value: confirmed } = await this.$createConfirmSwal();

            if (!confirmed) return;

            this.handleDeleteExpenseItem();
        },

        async handleDeleteExpenseItem() {
            this.deletingItem = true;

            const itemDocument = await this.$deleteExpenseItem(this.row.id);
            this.deletingItem = false;
            
            // Error was thrown, do not continue
            if (!itemDocument) return;

            this.removeExpenseItem(this.row.id);
            this.$swal('Success', 'The item was successfully deleted.', 'success');
        }
    }
}
</script>

<style lang="scss" scoped>
.fa:hover {
    cursor: pointer;
}
</style>

