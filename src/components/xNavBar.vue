<template>
    <!-- NAVBAR
    ================================================== -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-white border-bottom">
      <div class="container-fluid">

        <!-- Brand -->
        <a class="navbar-brand" href="/index.html">
          <img src="/assets/img/brand.svg" class="navbar-brand-img" alt="...">
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
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" aria-haspopup="true" aria-expanded="false">
                ¿Quiénes somos?
              </a>
             
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" aria-haspopup="true" aria-expanded="false">
                Blog
              </a>
              
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" aria-haspopup="true" aria-expanded="false">
                Saber más
              </a>
             
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" aria-haspopup="true" aria-expanded="false">
                E-learning Querétaro
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

  }
}
</script>