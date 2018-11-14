<template id="teste">
    <b-container>
        <b-col md="8" offset-md="2" sm="12" offset-sm="0">
            <b-form>
                <b-form-group id="nomeDoPedido"
                        label="Nome do Pedido:"
                        label-for="PedidoInput"
                        horizontal>
                    <b-form-input id="PedidoInput"
                            type="text"
                            required
                            v-model="nomePedido"
                            placeholder="Um nome para identificar o pedido">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="nomeCliente"
                        label="Nome do Cliente:"
                        label-for="nomeclienteInput3"
                        horizontal>
                    <b-form-input id="nomeClienteInput2"
                        type="text"
                        required
                        v-model="nomeCliente"
                        placeholder="Nome do cliente">
                    </b-form-input>
                </b-form-group>

            <b-form-group id="descricao"
                        label="Descrição:"
                        label-for="exampleInput2"
                        horizontal>
                    
                    <b-form-textarea id="textarea1"
                        placeholder="Uma descrição sobre o que o cliente deseja..."
                        v-model="descricao"
                        rows="3"
                        max-rows="3">
                    </b-form-textarea>
        </b-form-group>

            <b-form-group id="dataDeEntrega"
                        label="Data de Entrega:"
                        label-for="entregaInput4"
                        horizontal>
            <b-form-input id="entregaInput4"
                        type="date"
                        required
                        v-model="dataEntrega"
                        placeholder="">
            </b-form-input>
        </b-form-group>

            <b-form-group id="tempoDeProducao"
                        label="Tempo mínimo de produção:"
                        label-for="tempoProducaoInput2"
                        horizontal>
            <b-form-input id="tempoProducaoInput2"
                        type="number"
                        required
                        v-model="tempoProducao"
                        placeholder="0">
            </b-form-input>


        </b-form-group>

	<b-form-group id="materiais"
                        label="Materiais:"
                        label-for="exampleInput3"
                        horizontal>
                    
                    <b-form-textarea id="textarea1"
                        placeholder="Lista de Materiais"
                        v-model="materiais"
                        rows="3"
                        max-rows="3">
                    </b-form-textarea>
        </b-form-group>

        <b-button size="lg" variant="primary" @click="submitPedido()">Cadastrar</b-button>

        </b-form>
        </b-col>
    </b-container>
</template>

<script>
import {pedidosRef} from '../firebase'

export default {
    name: 'cadastro',
    data() {
        return {
            nomePedido: '',
            nomeCliente: '',
            descricao: '',
            dataEntrega: '',
            tempoProducao: 0
        }
    },
    methods: {
        submitPedido() {
            pedidosRef.push({
                nomePedido: this.nomePedido,
                cliente: this.nomeCliente,
                descricao: this.descricao,
                dataEntrega: this.dataEntrega,
                tempoProducao: this.tempoProducao,
                listaMateriais: []
            })
        }
    }
}
</script>
