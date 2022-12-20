<template>
  <div>
    <div v-if="isLoading">
      <LoadingComponent />
    </div>
    <transition>
      <div v-if='dados' class='conteudo'>
        <div>
        <h1>Sobre a {{ dados.titulo }}.</h1>
        <p>{{dados.descricao}}</p>
        <button @click='$router.push("/cursos")' class="btn-cursos"> Cursos </button>
        <div>
          <h2>Avaliações</h2>
          <ul>
            <li v-for='avaliacao in dados.avaliacoes' :key='avaliacao.nome'>
              <p>{{ avaliacao.nome }}</p>
              <p>{{ avaliacao.descricao }}</p>
            </li>
          </ul>
        </div>
      </div>
        <img src="../assets/aprender.png" alt="">
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import fetchData from '@/mixins/fetchData'
// import LoadingComponent from '@/components/LoadingComponent'

export default {
  name: 'HomeView',
  // component: { LoadingComponent },
  mixins: [fetchData],
  created () {
    this.isLoading = true
    this.fetchData('/home')
  }
}
</script>
<style scoped>
.btn-cursos{
border:none;
background: #4b8;
border-radius: 4px;
color: #fff;
cursor: pointer;
padding: 15px 40px;
font-size: 1rem;
margin-bottom: 40px;
margin-top: 10px;
box-shadow: 0 4px 2px rgba(0, 0, 0, .1);
font-family: 'Avenir', Arial, Helvetica, sans-serif;
}
</style>
