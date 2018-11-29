<template>
    <b-col md="4" sm="12" offset-md="4">
        <b-form @submit.prevent="login">
            <b-form-group label="Email:" label-for="email" horizontal>
                <b-form-input id="email" type="email" v-model="email" required></b-form-input>
            </b-form-group>
            <b-form-group label="Senha:" label-for="password" horizontal>
                <b-form-input id="password" type="password" v-model="senha" required></b-form-input>
            </b-form-group>
            <b-button type="submit" class="botao">Login</b-button>
        </b-form>
    </b-col>
</template>

<script>
import { auth } from '../firebase'
import router from '../router'

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            senha: ''
        }
    },
    methods: {
        login() {
            auth.signInWithEmailAndPassword(this.email, this.senha).then(
                function(user) {
                    router.replace('pedidos');
                },
                function(err) {
                    alert('Falha no login, verifique se seu email e senha estão corretos e tente novamente.');
                    console.log('Login error: ' + err + ': ' + err.message);
                }
            );
        }
    }
}
</script>

<style>

</style>
