<template>
<div id ="app">
   <x-nav-bar :links="links"/>
    <x-content 
    :textSujeto="textSujeto" 
    :textVerbo="textVerbo" 
    :textContenido="textContenido" 
    :textCircunstancia="textCircunstancia" />
    <router-view
    :textSujeto="textSujeto" 
    :textVerbo="textVerbo" 
    :textContenido="textContenido" 
    :textCircunstancia="textCircunstancia"
    :updateTextSujeto="updateTextSujeto"
    @updateTextSujetoEmit="updateTextSujeto"
    @updateTextVerboEmit="updateTextVerbo"
    ></router-view>
    <x-footer/>
</div>
</template>

<script>

import xFooter from './components/xFooter.vue'
import xNavBar from './components/xNavBar.vue'
import xContent from './components/xContent.vue'
export default {
    name:'App',
    components: {
      xNavBar,
      xContent,
      xFooter
    },
    methods:{
      updateTextSujeto(value){
        this.textSujeto = value
      },
      updateTextVerbo(value){
        this.textVerbo = value
      },
    },
    data(){
    return {
      textSujeto: '[sujeto]',
      textVerbo: '[verbo de acción]',
      textContenido: '[contenido de aprendizaje]',
      textCircunstancia: '[circunstancias]',
      links: [{
        name:'¿Quienes somos?',
        url: '#!'
      },
      {
        name:'Blog',
        url: '#!'
      },
      {
        name:'Saber más',
        url: '#!'
      },
      {
        name:'E-learning Querétaro',
        url: '#!'
      }
      ]
    }
  },
}
</script>

<style>

</style>
