<template>
  <!--Para poder comentar debe seguir eesta asintaxis que estoy ocuapndo en este momento-->
  <!--En un template al menos lo que he visto solo puede estar todo contenido dentro de una misma etiqueta-->
  <div>
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
    }
  }

</script>

<style media="screen">

</style>
