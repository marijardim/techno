<template>
  <div>
    <div v-if='isLoading'>
      <LoadingComponent />
    </div>
    <transition>
      <div v-if='dados' class="conteudo">
        <div>
          <h1>{{dados.titulo}}</h1>
          <p>{{ dados.descricao }}</p>
        </div>
        <ul class="lista">
          <li v-for="curso in dados.cursos" :key='curso.id'>
            <h2>
              <router-link :to='{name: "curso", params: { curso: curso.id }}'>
                {{ curso.nome }} - {{  curso.totalAulas }} aulas | {{ curso.horas }} horas
              </router-link>
            </h2>
            <p>{{ curso.descricao }}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData'
export default {
  name: 'CursosView',
  mixins: [fetchData],
  created () {
    this.fetchData('/cursos')
  }
}
</script>

<style>
.lista li{
  margin-bottom: 40px ;
}
</style>
