<template>
    <div>
     <section class="pt-8 pb-11 pt-md-9 pb-md-12 py-lg-6">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-7 text-center">

          
         
<div class="card bg-dark text-white">
              <div class="card-body">
                  <div class="form-group">
                    <label for="sujeto">
                        <span style="text-weight:bold; font-size:1.4em;">Sujeto</span>
<br/>
                        ¿Quién o quiénes aprenderán (destinatarios)?
                    </label>
                    <input @keyup="updateTextSujetoEmit" v-model="textSujeto" type="text" class="form-control" id="sujeto" autocomplete="off">
                  </div>
                 <router-link to="/verbo" class="btn btn-light">Siguiente</router-link>

              </div>
            </div>
           

          </div>
        </div> <!-- / .row -->
      </div> <!-- / .container -->
    </section>
    </div>
</template>
<script>

export default {
    name:'Home',
    props: {
        textSujeto: String,
        updateTextSujeto: Function
    },
    methods: {
        updateTextSujetoEmit(){
            this.$emit('updateTextSujetoEmit', this.textSujeto)
        }
    }
}
</script>
<style scoped>

</style>