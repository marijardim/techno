<template>
<div>
  <div v-if="isLoading">
    <LoadingComponent />
  </div>
    <div v-if="dados">
      <h2>{{ dados.nome }}</h2>
      <div class="video">
        <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${dados.youtube}`" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      </div>
</div>
</template>

<script>
import fetchData from '@/mixins/fetchData'
export default {
  name: 'AulaView',
  props: ['aula'],
  mixins: [fetchData],
  created () {
    this.fetchData(`/aula/${this.aula}`)
  },
  beforeRouteUpdate (to, from, next) {
    this.fetchData(`/aula/${to.params.aula}`)
    next()
  }
}
</script>
<style>
.video {
  position: relative;
  padding-bottom: 56,25%;
}

</style>
