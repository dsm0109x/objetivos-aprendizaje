<template>
    <div>
<!-- WELCOME
    ================================================== -->
    <section class="pt-4 pb-4 ">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-12 text-center">

           
            <!-- Text -->
            <p class="font-size-lg  mb-2 mb-md-4">
              Redacta tus objetivos de aprendizaje
            </p>

            <!-- Heading -->
            <h1 class="display-4 font-weight-bold">
              {{textRoot}}
            </h1>

          </div>
        </div> <!-- / .row -->
        
      </div> <!-- / .container -->
      
    </section>

       
    </div>
</template>

<script>
export default {
  name: 'xContent',
  props: {
    textSujeto: String,
    textVerbo: String,
    textContenido: String,
    textCircunstancia: String
  },
  computed:{
    textRoot(){
      return this.textSujeto + ' será capaz de ' + this.textVerbo + ' ' + 
      this.textContenido + ' ' + this.textCircunstancia
    }
  }
}
</script>