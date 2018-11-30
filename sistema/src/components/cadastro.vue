<template>
    <b-container>
        <b-col offset-md="2" md="8" sm="12">
            <b-form id="formCadastro" @submit.prevent="submitPedido">
                <b-form-group id="nomeDoPedido"
                        label="Nome do Pedido:"
                        label-class="text-sm-left"
                        vertical
                        >
                    
                    <b-form-input id="nomeDoPedido"
                            type="text"
                            required
                            v-model="nomePedido"
                            placeholder="Um nome para identificar o pedido">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="nomeCliente"
                        label="Nome do Cliente:"
                        label-class="text-sm-left"
                        vertical>
                    <b-form-input id="nomeCliente"
                        type="text"
                        required
                        v-model="nomeCliente"
                        placeholder="Nome do cliente">
                    </b-form-input>
                </b-form-group>

            <b-form-group id="descricao"
                        label="Descrição:"
                        label-class="text-sm-left"
                        vertical>
                    
                    <b-form-textarea id="descricao"
                        placeholder="Uma descrição sobre o que o cliente deseja..."
                        v-model="descricao"
                        rows="3"
                        max-rows="3">
                    </b-form-textarea>
            </b-form-group>

            <b-form-group id="dataDeEntrega"
                        label="Data de Entrega:"
                        label-class="text-sm-left"
                        vertical>
                <b-form-input id="dataDeEntrega"
                        type="date"
                        required
                        v-model="dataEntrega"
                        placeholder="">
                </b-form-input>
            </b-form-group>

            <b-form-group id="tempoDeProducao"
                        label="Tempo Mínimo de Produção:"
                        label-class="text-sm-left"
                        vertical>
            <b-form-input id="tempoDeProducao"
                        type="number"
                        required
                        v-model="tempoProducao"
                        placeholder="0">
            </b-form-input>
            </b-form-group>

            <b-form-group id="materiais"
                            label="Materiais:"
                            label-class="text-sm-left"
                            vertical>
                        
                        <div class="text-left">
                            <ul>
                                <li v-for="material in materiais">
                                    {{ material.nome }}: R$ {{ parseFloat(material.preco).toFixed(2) }}
                                </li>
                            </ul>
                        </div>

                        <div class="col-md-3">
                            <b-btn id="addMaterial" class="botao botao-sm" v-b-modal.materialModal>Adicionar Material</b-btn>
                        </div>
            </b-form-group>

            <b-button id="confirmarCadastro" class="botao" type="submit">Confirmar</b-button>

            </b-form>
        </b-col>

        <b-modal id="materialModal" ref="modal" title="Cadastrar Material" @ok="handleOK" @shown="clearModal">
            <form @submit.stop.prevent="adicionarMaterial">
                <label for="nome">Nome:</label>
                <b-form-input id="nome" type="text" v-model="nomeMaterial" />
                <label for="preco">Preço (R$):</label>
                <b-form-input id="preco" type="number" step="0.01" min="0" v-model="precoMaterial" />
            </form>
            <div slot="modal-footer">
                <b-btn id="cancelModal" @click="closeModal" variant="secondary">Cancelar</b-btn>
                <b-btn id="submitModal" @click="handleOK" variant="primary">OK</b-btn>
            </div>
        </b-modal>
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
            tempoProducao: 0,
            materiais: [],

            nomeMaterial: '',
            precoMaterial: 0,
        }
    },
    methods: {
        adicionarMaterial() {
            this.materiais.push({ nome: this.nomeMaterial, preco: this.precoMaterial });
            this.clearModal();
            this.$refs.modal.hide();
        },
        closeModal() {
            this.clearModal();
            this.$refs.modal.hide();
        },
        clearModal() {
            this.nomeMaterial = '';
            this.precoMaterial = '';
        },
        handleOK(evt) {
            evt.preventDefault();

            if (!this.nomeMaterial || !this.precoMaterial) {
                alert('Preencha os campos!');
            } else {
                this.adicionarMaterial();
            }
        },
        submitPedido() {
            pedidosRef.push({
                nomePedido: this.nomePedido,
                cliente: this.nomeCliente,
                descricao: this.descricao,
                dataEntrega: this.dataEntrega,
                tempoProducao: this.tempoProducao,
                materiais: this.materiais
            });

            this.$router.replace('pedidos');
        }
    }
}
</script>

<style>

.col-form-label{
    font-weight: bold;
}

</style>