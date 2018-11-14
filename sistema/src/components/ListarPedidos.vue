<template>
    <div>
        <b-table :fields="fields" :items="items" >
            <template slot="detalhes" slot-scope="data">
                <b-button size="sm" :to="{ name:'detalhesPedido', params: { hkey: items[data.index]['.key'] } }">Detalhes</b-button>
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
                'descricao',
                { key: 'dataEntrega', label: 'Data de Entrega' },
                { key: 'tempoProducao', label: 'Tempo de Produção' },
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
body{
background-color: #fbbebe;
}
</style>
