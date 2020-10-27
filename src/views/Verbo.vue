<template>
    <div>
     <section class="pt-8 pb-11 pt-md-9 pb-md-12 py-lg-6">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-7 text-center">

          
         
<div class="card bg-dark text-white">
              <div class="card-body">

                  <div class="form-group">
                    <label for="Verbo"><span style="text-weight:bold; font-size:1.4em;">Verbo</span>
<br/>
                        ¿Qué hará?</label>
                    <input @keyup="updateTextVerboEmit" v-model="textVerbo" type="text" class="form-control" id="Verbo" autocomplete="off">
                  </div>
                 <router-link to="/aprendizaje" class="btn btn-light">Siguiente</router-link>

              </div>
            </div>
            
            <router-link to="/" class="btn btn-link float-left"> anterior</router-link>
           

          </div>
        </div> <!-- / .row -->
      </div> <!-- / .container -->
    </section>
    </div>
</template>
<script>

export default {
    name:'Verbo',
    props: {
        textVerbo: String,
        updateTextVerbo: Function
    },
    methods: {
        updateTextVerboEmit(){
            this.$emit('updateTextVerboEmit', this.textVerbo)
        }
    }
}
</script>
<style scoped>

</style>