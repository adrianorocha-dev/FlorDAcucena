<template>
    <div class="container">
        <div class="row justify-content-start">
            <router-link class="btn botao" to="/cadastroCliente">Novo</router-link>
        </div>
        <br>
        <div class="tabela col-md-12">
            <b-table :fields="fields" :items="items" bordered outlined striped>
                <template slot="detalhes" slot-scope="data">
                    <b-button variant="none" class="botao" :to="{ name:'detalhesPedido', params: { hkey: items[data.index]['.key'] } }">Detalhes</b-button>
                </template>
            </b-table>
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
            ]
        }
    },
    firebase:{
        items: pedidosRef
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
