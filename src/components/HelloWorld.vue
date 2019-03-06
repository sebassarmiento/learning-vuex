<template>
  <div class="container">
    <div class="left">
      <h1>{{ title }}</h1>
      <div class="input-name">
        <input v-model="newName" type="text" />
        <button v-on:click="addName" >Add name</button>
      </div>
      <ul>
        <li v-for="(name, index) in names" v-bind:key="index" v-bind:class="removed === index ? 'removed' : ''" >{{ name }} <span v-on:click="removeName(index)" >Remove</span></li>
      </ul>
    </div>
    <div class="right">
      <Stats />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Stats from '../components/Stats.vue'

export default {
  name: 'HelloWorld',
  components: {
    Stats
  },
  data(){
    return {
      newName: '',
      removed: false
    }
  },
  methods: {
    ...mapState(['names']),
    ...mapMutations(['ADD_NAME', 'REMOVE_NAME']),
    ...mapActions(['removeNameAction']),

    addName(){
      if(this.newName.length > 0){
        this.ADD_NAME(this.newName)
        this.newName = ''
      }
    },

    removeName(i){
      this.removed = i
      this.removeNameAction(i).then(() => this.removed = false)
    }

  },
  computed: {
    ...mapState(['title', 'names'])
   }

}
</script>

<style scoped>

.container{
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 12px;
}

.left{
  height: 100%;
}

.right{
  height: 100%;
  background: rgba(255, 255, 255, 0.199);
  background-image: linear-gradient(to left, #dad4ec 0%, #dad4ec 20%, #f3e7e900 90%);
  border-radius: 4px;
}

.input-name{
  display: flex;
  margin: 12px;
  margin-right: 24px;
  box-sizing: border-box;
}
.input-name input{
  flex: 1;
  padding: 24px;
  font-size: 1em;
  border: none;
}
.input-name button{
  padding: 12px;
  font-size: 0.9em;
  background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);
  border: none;
  cursor: pointer;
}

ul{
  padding: 0px;
  max-height: 70vh;
  overflow: scroll;
}

.removed{
  transform: scale(1, 0);
}

li{
  list-style: none;
  text-align: left;
  padding: 24px;
  margin: 12px;
  margin-right: 24px;
  background-image: linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%);
  text-transform: capitalize;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.274);
  animation: showName 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-origin: top;
  position: relative;
  transition: all 0.4s ease-in-out;
}

@keyframes showName {
  0%{
    transform: scale(1, 0);
  }
  100%{
    transform: scale(1);
  }
}

li span{
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  padding: 6px;
  background: rgba(255, 0, 0, 0.288);
  transition: all 0.1s ease-in-out;
}
li span:hover{
  cursor: pointer;
  color: white;
}

</style>
