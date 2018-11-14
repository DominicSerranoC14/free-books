<template>
    <div class="card">
        <div 
            class="card-header p-0">
            <button 
                :data-target="`#${id}`"
                class="btn btn-link text-dark px-4 py-3"
                data-toggle="collapse" >
                <slot name="header" />
            </button> 
        </div>

        <div 
            :id="id" 
            :class="`collapse ${isCollapsed ? '' : 'show'}`" >
            <div class="card-body">
                <slot name="body" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: { type: String, required: true },
        isCollapsed: { type: Boolean, default: true }
    }
}
</script>

