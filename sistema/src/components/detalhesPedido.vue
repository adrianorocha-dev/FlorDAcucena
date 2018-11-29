<template>
    <b-container>
        <div class="col-md-8 col-sm 12 text-left">
            <p><strong>Pedido: </strong>{{pedido.nomePedido}} </p>
            <p><b>Cliente: </b>{{pedido.cliente}}</p> 
            <p><b>Descrição: </b>{{pedido.descricao}}</p>
            <p><b>Materiais: </b></p>

            <div class="well col-md-12" v-if="materiais.length > 0">
                <ul v-for="material in materiais" v-bind:key="material.key">
                    <li>
                        {{ material.val.nome }}: R$ {{ parseFloat(material.val.preco).toFixed(2) }}
                    </li>
                </ul>
            </div>

            <p v-else>Nenhum material</p>

            <b-button v-b-modal.materialModal class="botao">Adicionar</b-button>

            <div class="row justify-content-around">
                <p><b>Custo: R$ {{ custo }}</b></p> 
                <p><b>Valor Sugerido: R$ {{ preco }}</b></p>
            </div>
            <div class="row justify-content-center">
                <b-btn class="botao">Finalizar Pedido</b-btn>
            </div>

            <b-modal id="materialModal" ref="modal" title="Cadastrar Material" @ok="handleOK" @shown="clearModal">
                <form @submit.stop.prevent="adicionarMaterial">
                    <label for="nome">Nome:</label>
                    <b-form-input id="nome" type="text" v-model="nomeMaterial" />
                    <label for="preco">Preço (R$):</label>
                    <b-form-input id="preco" type="number" step="0.01" min="0" v-model="precoMaterial" />
                </form>
            </b-modal>
        </div>
    </b-container>
</template>

<script>
import {pedidosRef} from '../firebase'
import { functions } from 'firebase';
import { format } from 'util';

pedidosRef.orderByKey()

export default {
    name: 'detalhesPedido',
    data() {
        return {
            key: this.$route.params.hkey,
            pedido: { cliente: null, dataEntrega: null, descricao: null, nomePedido: null, tempoProducao: null, valorMaoDeObra: null, materiais: [] },
            materiais: [],
            custo: 0,
            preco: 0,

            /* modal */
            nomeMaterial: '',
            precoMaterial: '',
        }
    },
    methods: {
        adicionarMaterial() {
            pedidosRef.child(this.key).child('materiais').push({ nome: this.nomeMaterial, preco: this.precoMaterial });
            this.clearModal();
            this.$refs.modal.hide();
            this.updatePedido();
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
        updatePedido() {
            var pedido;
            pedidosRef.child(this.key).on('value', function(snapshot) {
                pedido = snapshot.val();
            });

            var materiais = []

            pedidosRef.child(this.key).child('materiais').once('value', function(snapshot) {

                snapshot.forEach(function(childSnapshot) {
                    materiais.push({ val: childSnapshot.val(), key: childSnapshot.key });
                });

            });
            
            console.log(materiais);

            this.pedido = pedido;
            this.materiais = materiais;

            // var custo = parseFloat(pedido.valorMaoDeObra);
            var custo = 0;

            for (var i = 0; i < materiais.length; i++) {
                custo += parseFloat(materiais[i].val.preco);
            }

            this.custo = custo.toFixed(2);

            this.preco = (custo * 1.2).toFixed(2);    
        }
    },
    mounted() {
        this.updatePedido();
    }
}
</script>

<style>

ul {
    list-style: none;
}

</style>
