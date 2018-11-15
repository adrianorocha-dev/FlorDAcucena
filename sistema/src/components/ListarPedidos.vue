<template>
    <div id="tabela">
        <b-table :fields="fields" :items="items" bordered=true outlined="true" striped="true">
            <template slot="detalhes" slot-scope="data">
                <b-button id="btnDetalhes" :to="{ name:'detalhesPedido', params: { hkey: items[data.index]['.key'] } }">Detalhes</b-button>
            </template>
        </b-table>
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
#btnDetalhes{
    background-color: #d9779a;
    border-color: #d9779a;
    padding: 2px 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 25px;
}

#tabela {
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
