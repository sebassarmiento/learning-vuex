<template>
    <div class="stats">
        <h1>Stats</h1>
        <p>There are currently {{ countNames }} names on vuex state</p>
        <button v-on:click="removeAll" >{{ removeButton }}</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Stats',
    data(){
        return {
            removeButton: 'Remove all names'
        }
    },
    computed: {
        ...mapGetters(['countNames'])
    },
    methods: {
        ...mapActions(['removeAllAction']),
        removeAll(){
            this.removeButton = 'Removing'
            this.removeAllAction().then(() => this.removeButton = 'Remove all names')
        }
    }
}
</script>

<style scoped>

.stats button{
    padding: 12px;
    font-size: 1em;
    background-image: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%);
    color: white;
    cursor: pointer;
}


</style>

