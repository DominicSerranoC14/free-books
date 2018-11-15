export default {
    methods: {
        $createConfirmSwal(options) {
            return this.$swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this.",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#dc3545',
                confirmButtonText: 'Delete',
                cancelButtonColor: '#007bff',
                cancelButtonText: 'Cancel',
                ...options
            });
        }
    }
}