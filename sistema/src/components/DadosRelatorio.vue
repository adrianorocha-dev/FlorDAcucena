<template>
    <b-container>
        <title>Gastos fixos:</title>
        <b-col md="8" offset-md="2" sm="12" offset-sm="0">
            <b-form>
                <b-form-group id="gastosLuz"
                        label="Gastos com energia:"
                        label-class="text-sm-left"
                        vertical
                        >
                    
                    <b-form-input id="luz"
                            type="double"
                            required
                            v-model="contaLuz"
                            placeholder="Valor gasto com energia...">
                    </b-form-input>
                </b-form-group>

                <b-form-group id= "gastosagua"
                        label="Gastos com água:"
                        label-class="text-sm-left"
                        vertical>
                    <b-form-input id="agua"
                        type="double"
                        required
                        v-model="contaAgua"
                        placeholder="Valor gasto com água...">
                    </b-form-input>
                </b-form-group>

            <b-form-group id="gastointernet"
                        label="Gastos com internet:"
                        label-class="text-sm-left"
                        vertical>
                    
                    <b-form-textarea id="internet"
                        placeholder="Valor gasto com internet..."
                        v-model="contaInternet"
                        rows="3"
                        max-rows="3">
                    </b-form-textarea>
        </b-form-group>

            <b-form-group id="gastoaluguel"
                        label="Valor do aluguel:"
                        label-class="text-sm-left"
                        vertical>
            <b-form-input id="aluguel"
                        type="date"
                        required
                        v-model="contaAluguel"
                        placeholder="">
            </b-form-input>
        </b-form-group>
            <b-form-group id="gastosextras"
                        label="Gastos estras:"
                        label-class="text-sm-left"
                        vertical>
            <b-form-input id="extra"
                        type="double"
                        required
                        v-model="gastoextra"
                        placeholder="0">
            </b-form-input>


        </b-form-group>

        <b-button id="botaoCad" @click="submitGastos()">Confirmar</b-button>

        </b-form>
        </b-col>
    </b-container>
</template>

<script>
import {gastosRef} from '../firebase'

export default {
    name: 'Gastos',
    data() {
        return {
            contaLuz: 0,
            contaAgua: 0,
            contaInternet: 0,
            contaAluguel: 0,
            gastoextra: 0
        }
    },
    methods: {
        submitGastos() {
            gastosRef.push({
                luz: this.contaLuz,
                agua: this.contaAgua,
                internet: this.contaInternet,
                aluguel: this.contaAluguel,
                extra: this.gastoextra,
            })
        }
    }
}
</script>

<style>

#botaoCad{
    font-weight: bold;
    padding: 0.5rem 19rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 25px;
    background-color: #d9779a;
    border-color: #d9779a;
}

.col-form-label{
    font-weight: bold;
}

</style>