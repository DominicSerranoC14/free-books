<template>
    <div class="row">
        <div class="col-md-4 col-lg-4 mb-4">
            <div class="accordion">
                <accordion-menu-item 
                    :id="'expense-year-menu'" 
                    :is-collapsed="false">
                    <template slot="header">
                        Manage Expense Years
                    </template>

                    <template slot="body">
                        <expense-year-menu 
                            :add-expense-year="addExpenseYear" 
                            :all-expense-years="allExpenseYears"
                            :set-expense-year="setExpenseYear"
                        />
                    </template>
                </accordion-menu-item>

                <accordion-menu-item :id="'create-expense-item-form'">
                    <template slot="header">
                        Create Expense Item
                    </template>

                    <template slot="body">
                        <div v-if="!selectedExpenseYear">
                            Select an expense year before creating an expense item.
                        </div>

                        <create-expense-item-form
                            v-if="selectedExpenseYear"
                            :add-expense-item="addExpenseItem"
                            :expense-categories="expenseCategories" 
                            :selected-expense-year="selectedExpenseYear"
                        />
                    </template>
                </accordion-menu-item>
            </div>
        </div>

        <div class="col-md-8">
            <div class="row">
                <expense-year-summary 
                    :selected-expense-year="selectedExpenseYear" 
                    class="col-md-12" 
                />

                <loader 
                    v-if="loadingItems" 
                    class="col-md-12" />

                <expense-item-list
                    v-if="expenseItems && !loadingItems"
                    :expense-items="expenseItems"
                    class="col-md-12"
                />
            </div>
        </div>
    </div>
</template>

<script>
import AccordionMenuItem from '@/Components/Global/AccordionMenuItem';
import CreateExpenseItemForm from '@/Components/Pages/Expenses/CreateExpenseItemForm';
import ExpenseItemList from '@/Components/Pages/Expenses/ExpenseItemList';
import ExpenseYearMenu from '@/Components/Pages/Expenses/ExpenseYearMenu';
import ExpenseYearSummary from '@/Components/Pages/Expenses/ExpenseYearSummary';
import Loader from '@/Components/Global/Loader';

import expenseCategoriesMixin from '@/Services/Collections/expenseCategories';
import expenseItemsMixin from '@/Services/Collections/expenseItems';
import expenseYearsMixin from '@/Services/Collections/expenseYears';

export default {
    components: {
        AccordionMenuItem,
        CreateExpenseItemForm,
        ExpenseItemList,
        ExpenseYearMenu,
        ExpenseYearSummary,
        Loader
    },

    mixins: [ 
        expenseCategoriesMixin, 
        expenseItemsMixin,
        expenseYearsMixin
    ],

    data() {
        return {
            allExpenseYears: null,
            expenseCategories: null,
            expenseItems: null,
            loadingItems: false, 
            selectedExpenseYear: null
        }
    },

    watch: {
        selectedExpenseYear(year) {
            if (!year) return;
            
            this.fetchExpenseItems();
        }
    },

    async mounted() {
        this.allExpenseYears = await this.$getAllExpenseYears();
        this.expenseCategories = await this.$getAllExpenseCategories();
    },

    methods: {
        addExpenseItem(item) {
            this.expenseItems.push(item);
        },

        addExpenseYear(year) {
            this.allExpenseYears.push(year);
        },

        async fetchExpenseItems() {
            this.loadingItems = true;
            this.expenseItems = await this.$getExpenseItemsByYear(this.selectedExpenseYear);
            this.loadingItems = false;
        },

        setExpenseYear(year) {
            this.selectedExpenseYear = year;
        }
    },
};
</script>

