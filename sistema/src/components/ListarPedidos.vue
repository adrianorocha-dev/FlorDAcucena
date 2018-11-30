<template>
    <div class="container">
        <div class="row justify-content-start">
            <router-link id="novoPedido" class="btn botao" to="/pedidos/novo">Novo</router-link>
        </div>
        <br>
        <div class="tabela col-md-12">
            <b-table v-if="items.length > 0" :fields="fields" :items="items" bordered outlined striped>
                <template slot="detalhes" slot-scope="data">
                    <b-button :id="'link' + data.index" variant="none" class="botao" :to="{ name:'detalhesPedido', params: { hkey: items[data.index].key } }">Detalhes</b-button>
                </template>
            </b-table>

            <p v-else>Nenhum pedido pendente.</p>
        </div>
    </div>
</template>

<script>
import {pedidosRef} from '../firebase'

export default {
    name: 'ListarPedidos',
    data(){
        return{
            fields: [
                { key: 'nomePedido', label: 'Pedido' },
                'cliente',
                { key: 'dataEntrega', label: 'Entrega' },
                'detalhes'
            ],
            items: [],
            loading: true
        }
    },
    methods: {
        loadLista() {
            pedidosRef.once('value', snapshot => {
                snapshot.forEach(childSnap => {
                    var pedido = childSnap.val()
                    pedido.key = childSnap.key
                    if (!pedido.finalizado) {
                        this.items.push(pedido)
                    }
                })
                this.loading = false
            })
        }
    },
    mounted() {
        this.loadLista()
    }
}
</script>

<style>

.tabela {
    padding-left: 150px;
    padding-right: 150px;
    font-weight: bold;
}

.table .thead-light th {
    color: white;
    background-color: #d9779a;
    border: 2px solid #c79bbf;
    font-size: 1.25rem;
}

.table-bordered th, .table-bordered td {
    border: 2px solid #c79bbf;
}

</style>
