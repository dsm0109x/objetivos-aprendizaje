<template>
  <div id="app">
    <x-nav-bar></x-nav-bar>
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
  }
}
</script>

<style>

</style>
