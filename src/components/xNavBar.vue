<template>
    <!-- NAVBAR
    ================================================== -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-white border-bottom">
      <div class="container">

        <!-- Brand -->
        <a class="navbar-brand" href="/index.html">
          <img src="/logo.png" class="navbar-brand-img" alt="Logo Subitus">
        </a>

        <!-- Toggler -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="navbarCollapse">

          <!-- Toggler -->
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fe fe-x"></i>
          </button>

          <!-- Navigation -->
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown" v-for="link in links" :key="link.url">
              <a class="nav-link" :href="link.url" aria-haspopup="true" aria-expanded="false">
                {{link.name}}
              </a>
             
            </li>
            
            
            
          </ul>


        </div>

      </div>
    </nav>
</template>

<script>
export default {
  name: 'xNavBar',
  props: {
    links: Array,
  }
}
</script>