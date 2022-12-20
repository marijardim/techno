<template>
  <div>
    <div v-if='isLoading'>
      <LoadingComponent />
    </div>
    <transition>
      <div v-if='dados'>
        <h1>{{dados.titulo}}</h1>
        <p>{{ dados.descricao }}</p>
        <ul>
          <li>
            <b>Email:</b>
            {{ dados.contato.email }}
          </li>
          <li>
            <b>Telefone:</b>
            {{ dados.contato.telefone }}
          </li>
          <li>
            <b>Endereço:</b>
            {{ dados.contato.endereco }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData'

export default {
  name: 'ContatoView',
  mixins: [fetchData],
  created () {
    this.fetchData('/contato')
  }
}
</script>

<style>

</style>
