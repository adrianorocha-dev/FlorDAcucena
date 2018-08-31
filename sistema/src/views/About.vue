<template>
  <div class="about">
    Nome: <input v-model="nomeInput" type="text">
    <b-button variant="success" @click="adicionar()">Add</b-button>
    <h1 v-for="nome in lista">{{nome}}</h1> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      nomeInput: '',
      lista: []
    }
  },
  methods: {
    adicionar() {
      this.lista.push(this.nomeInput)
      this.nomeInput = ''
    }
  }
}
</script>
