<template>
    <div class="row">
        <div class="col-md-4 p-0">
            <div class="accordion">
                <accordion-menu-item 
                    :id="'expense-year-menu'" 
                    :is-collapsed="false">
                    <template slot="header">
                        Manage Expense Years
                    </template>

                    <template slot="body">
                        <expense-year-menu />
                    </template>
                </accordion-menu-item>

                <accordion-menu-item :id="'create-expense-item-form'">
                    <template slot="header">
                        Create Expense Item
                    </template>

                    <template slot="body">
                        <create-expense-item-form :expense-categories="expenseCategories" />
                    </template>
                </accordion-menu-item>
            </div>
        </div>

        <div class="col-md-8"/>
    </div>
</template>

<script>
import AccordionMenuItem from '@/Components/Global/AccordionMenuItem';
import CreateExpenseItemForm from '@/Components/Pages/Expenses/CreateExpenseItemForm';
import ExpenseYearMenu from '@/Components/Pages/Expenses/ExpenseYearMenu';

import expenseCategoriesMixin from '@/Services/Collections/expenseCategories';

export default {
    components: {
        AccordionMenuItem,
        CreateExpenseItemForm,
        ExpenseYearMenu
    },

    mixins: [ expenseCategoriesMixin ],

    data() {
        return {
            expenseCategories: null
        }
    },

    async mounted() {
        this.expenseCategories = await this.$getAllExpenseCategories();
    }
};
</script>

