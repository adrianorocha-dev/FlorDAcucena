<template>
    <b-container>
        <div id="infoPedido" v-if="!loading" class="col-md-8 col-sm 12 text-left">
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

            <b-button v-b-modal.materialModal id="adicionaMaterial" class="botao">Adicionar</b-button>

            <div class="row justify-content-around">
                <p><b>Custo: R$ {{ custo }}</b></p> 
                <p><b>Valor Sugerido: R$ {{ preco }}</b></p>
            </div>
            <div class="row justify-content-center">
                <b-btn id="finalizarPedido" class="botao" @click="finalizarPedido()">Finalizar Pedido</b-btn>
            </div>

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
        </div>
    </b-container>
</template>

<script>
import { pedidosRef, db } from '../firebase';

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
            loading: true,

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
        loadFirebase(callback) {
            var key = this.key;
            var pedido;
            pedidosRef.child(key).on('value', function(snapshot) {
                pedido = snapshot.val();
                
                var materiais = [];
                pedidosRef.child(key).child('materiais').once('value', function(snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                        materiais.push({ val: childSnapshot.val(), key: childSnapshot.key });
                    });
                    callback(pedido, materiais);
                });
            });
        },
        updatePedido(pedido, materiais) {
            this.pedido = pedido;
            this.materiais = materiais;

            var custo = 0;
            for (var i = 0; i < materiais.length; i++) {
                custo += parseFloat(materiais[i].val.preco);
            }

            this.custo = custo.toFixed(2);

            this.preco = (custo * 1.2).toFixed(2);
            
            this.loading = false;
        },
        finalizarPedido() {
            var mat = []
            for (var i = 0; i < this.materiais.length; i++) {
                mat.push(this.materiais[i].val)
            }

            var router = this.$router;

            pedidosRef.child(this.key).set({
                cliente: this.pedido.cliente,
                dataEntrega: this.pedido.dataEntrega,
                descricao: this.pedido.descricao,
                materiais: mat,
                nomePedido: this.pedido.nomePedido,
                tempoProducao: this.pedido.tempoProducao,
                finalizado: true
            }, function(error) {
                if (error) {
                    console.error('Erro atualização')
                } else {
                    console.log('Atualidado')
                    router.push('/pedidos')
                }
            });


            // var update = {}

            // update['/pedidos' + this.key] = pedidoAtual;
            // db.ref().update(update);
        }
    },
    mounted() {
        this.loadFirebase(this.updatePedido);
    }
}
</script>

<style>

ul {
    list-style: none;
}

</style>
