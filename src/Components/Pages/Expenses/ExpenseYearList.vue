<template>
    <div>
        <h5>Select an expense year to view.</h5>

        <div class="list-group">
            <button 
                v-for="({ year }) in allExpenseYears"
                :key="year"
                class="list-group-item list-group-item-action text-center py-2">{{ year }}</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        allExpenseYears: { type: Array, required: true }
    }
}
</script>


