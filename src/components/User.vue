<template lang="html">
  <div class="users">
    <h1>User component</h1>

    <ul>
      <li v-for="user in users">
        {{user.name+' '+user.email}}<button v-on:click="deleteUser(user)">X</button>
      </li>
    </ul>
    <form v-on:submit.prevent="addUsers">
      <input type="text" v-model="newUser.name" placeholder="Name">
      <input type="email" v-model="newUser.email" placeholder="email">
      <button type="submit">
        Add
      </button>
    </form>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        users: [
          {
            name:'Joe',
            email:'joe@hotmail.com',
            contacto: false
          },
          {
            name:'Ryan',
            email:'ryan@hotmail.com',
            contacto: false
          },
          {
            name:'Carls',
            email:'car@hotmail.com',
            contacto: true
          }
        ],
        newUser:{}
      }
    },

    methods:{
      addUsers(){
        this.users.push(this.newUser);
        this.newUser={};
      },
      deleteUser(user){
        this.users.splice(this.users.indexOf(user),1);
      }
    }
  }
</script>

<style media="screen">

</style>
