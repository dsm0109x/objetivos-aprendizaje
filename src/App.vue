<template>
  <div id="app">
    <x-nav-bar :links="links"></x-nav-bar>
    <x-content></x-content>
    <x-footer></x-footer>
  </div>
</template>

<script>
import xFooter from './components/xFooter.vue'
import xNavBar from './components/xNavBar.vue'
import xContent from './components/xContent.vue'

export default {
  name: 'App',
  components: {
    xFooter,
    xNavBar,
    xContent
  },
  data(){
    return {
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
  }
}
</script>

<style>

</style>
