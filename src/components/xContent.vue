<template>
    <div>
<!-- WELCOME
    ================================================== -->
    <section class="pt-4 pb-4 bg-light bg-between">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-12 text-center">

           
            <!-- Text -->
            <p class="font-size-lg  mb-2 mb-md-4">
              Redacta tus objetivos de aprendizaje
            </p>

            <!-- Heading -->
            <h1 class="display-3 font-weight-bold">
              {{textRoot}}
            </h1>

          </div>
        </div> <!-- / .row -->
        
      </div> <!-- / .container -->
      
    </section>
        <section class="pt-3 pb-5 pt-md-2 pb-md-7  bg-light bg-between">

    <div class="container">
        <div class="row justify-content-center">
          <div class="col-8">
            <div class="card">
              <div class="card-body">

                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1"><span class="font-weight-bold">Sujeto</span><br/>¿Quién o quiénes aprenderán (destinatarios)?</label>
                    <input v-model="textSujeto" type="text" class="form-control" placeholder="Ingresa el sujeto del objetivo de aprendizaje" autocomplete="off">
                  </div>
                 
                  <button type="submit" class="btn btn-primary w-100">Siguiente</button>
                </form>

              </div>
            </div>

          </div>

        </div>
      </div>
      </section>
    </div>
</template>

<script>
export default {
  name: 'xContent',
  props: {
  },
  data(){
    return{
      textSujeto: '[sujeto]',
      textVerbo: '[verbo de acción]',
      textContenido: '[contenido de aprendizaje]',
      textCircunstancia: '[circunstancias]'
    }
  },
  computed:{
    textRoot(){
      return this.textSujeto + ' será capaz de ' + this.textVerbo + ' ' + 
      this.textContenido + ' ' + this.textCircunstancia
    }
  }
}
</script>