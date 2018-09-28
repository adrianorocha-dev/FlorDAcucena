<template>
    <div>
        <b-table :fields="fields" :items="items" >
            <template slot="index" slot-scope="data">
                {{data.index + 1}}
            </template>
        </b-table>
    </div>
    
</template>

<script>
export default {
    name: 'ListarPedidos',
    data(){
        return{
            fields: [
                'index',
                'pedido',
                'cliente',
                { key: 'dataentrega', label: 'Data de Entrega' }
            ],
            items: [
                { pedido: 'teste', cliente: 'teste', dataentrega: 'teste' },
                { pedido: 'teste2', cliente: 'teste2', dataentrega: 'teste'}
            ]
        }
    }
}
</script>
