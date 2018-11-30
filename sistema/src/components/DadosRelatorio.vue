<template>
    <b-container>
        <title>Gastos fixos:</title>
        <b-col md="8" offset-md="2" sm="12" offset-sm="0">
            <b-form @submit.prevent="submitGastos">
                <b-form-group id="gastosLuz"
                        label="Gastos com energia:"
                        label-class="text-sm-left"
                        vertical
                        >
                    
                    <b-form-input id="luz"
                            type="number"
                            required
                            step="0.01"
                            v-model="contaLuz">
                    </b-form-input>
                </b-form-group>

                <b-form-group id= "gastosagua"
                        label="Gastos com água:"
                        label-class="text-sm-left"
                        vertical>
                    <b-form-input id="agua"
                        type="number"
                        required
                        step="0.01"
                        v-model="contaAgua">
                    </b-form-input>
                </b-form-group>
            

            <b-form-group id="gastointernet"
                        label="Gastos com internet:"
                        label-class="text-sm-left"
                        vertical>
                    
                    <b-form-input id="internet"
                        type="number"
                        v-model="contaInternet"
                        step="0.01">
                    </b-form-input>
        </b-form-group>

            <b-form-group id="gastoaluguel"
                        label="Valor do aluguel:"
                        label-class="text-sm-left"
                        vertical>
            <b-form-input id="aluguel"
                        type="number"
                        required
                        step="0.01"
                        v-model="contaAluguel"
                        placeholder="">
            </b-form-input>
        </b-form-group>
        <!-- <b-form-group id="gastosextras"
                        label="Gastos extras:"
                        label-class="text-sm-left"
                        vertical>
            <b-form-input id="extra"
                        type="number"
                        step="0.01"
                        required
                        v-model="gastoextra">
            </b-form-input>


        </b-form-group> -->

        <b-button class="botao" type="submit">Salvar</b-button>
        <b-button class="botao" @click="cancelar()">Cancelar</b-button>

        </b-form>
        </b-col>
    </b-container>
</template>

<script>
import {db} from '../firebase'

var gastos = '';
db.ref('gastos').once('value').then(snapshot => {
    gastos = snapshot.val()
})

export default {
    name: 'Gastos',
    data() {
        return {
            contaLuz: gastos.contaLuz,
            contaAgua: gastos.contaAgua,
            contaInternet: gastos.contaInternet,
            contaAluguel: gastos.contaAluguel
        }
    },
    methods: {
        submitGastos() {
            db.ref('gastos').set({
                luz: this.contaLuz,
                agua: this.contaAgua,
                internet: this.contaInternet,
                aluguel: this.contaAluguel
            })

            console.log('Atualizado')
        },
        cancelar() {
            this.$router.push('/relatorio');
        }
    }
}
</script>

<style>

.col-form-label{
    font-weight: bold;
}

</style>