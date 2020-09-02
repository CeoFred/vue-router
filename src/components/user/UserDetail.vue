<template>
<div>
    <h3>Some User Details</h3>
<p>User loaded has ID: {{ $route.params.id }}</p>

<router-link 
:to="link" class="btn btn-primary" tag="button">Edit User</router-link>
</div>
</template>


<script>
export default {
    data(){
        return {
            link: { 
                name:'userEdit', 
                params: { id: this.$route.params.id }, 
                query: { 
                    locale: 'en', 
                    q: 100
                    }
                },
                hash: '#data'
        }
    },
    beforeRouteEnter (to, from, next) {
        if (true){
        next(true);
        } else {
            next(false)
        }
    }
}
</script>
