<template>
  <!--Para poder comentar debe seguir eesta asintaxis que estoy ocuapndo en este momento-->
  <!--En un template al menos lo que he visto solo puede estar todo contenido dentro de una misma etiqueta-->
  <div class="test">
    <!--Con v-html se maneja el codigo html desde una variable en javascript-->
    <div v-html="myHTML"/>
    <div v-text="title"/>
    <!--Tenemos todos los validadores logicos-->
    <div v-if="showName">
      <p>{{user.firstName}}</p>
    </div>
    <div v-else>
      <p>No tiene permitido ver el nombre</p>
    </div>
    <hr>
    <ul>
      <li v-for="task in tasks">
        {{task.title}}
      </li>
    </ul>
    <!--Empezaremos con metodos en este caso click-->
    <input type="text" v-model="user.firstName">
    <button type="button" v-on:click="saludar(user.firstName)">
      Click Me
    </button>
    <div>
      <input type="text" v-on:keyup="typing">
    </div>
    <div>
      <input type="text" v-on:keyup.enter="TypeEnter">
    </div>
    <div>
      {{fullName}}
    </div>
    <div>
      {{msg}}
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        title: 'Hola Vuejs',
        user: {
          firstName: 'Joe',
          lastName: 'MacMillan'
        },
        myHTML: '<h1>hola vue<h1/>',
        showName: false,
        tasks:[
          {title:'eat'},
          {title:'dinner'}
        ]
      }
    },
    //Ingreso de nuevo metodo
    methods: {
      saludar(cadena){
        alert('hello '+cadena)
      },
      //Teclea cualquier cosa
      typing(e){
        console.log(e.target.value);
      },
      //Tecleo un enter
      TypeEnter(e){
        console.log('Dio un enter');
      }
    },
    //Para tener datos que se estan cambiando de manera dinamica
    computed:{
      fullName(){
        return this.user.firstName+' '+this.user.lastName;
      }
    },
    props:{
      msg:{
        type:String,
        default: "Mensaje por defecto"
      }
    }
  }

</script>

<style media="screen">
  .test{
    background: #eee;
  }
</style>
