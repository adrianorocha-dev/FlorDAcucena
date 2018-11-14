<template>
    <b-container class="text-left">
        <p><strong> {{pedido.nomePedido}} </strong></p>
        <p>Cliente: {{pedido.cliente}}</p> 
        <p>Descrição: {{pedido.descricao}}</p>
        <b-button size="sm" variant="success">Adicionar Material</b-button>
    </b-container>
</template>

<script>
import {pedidosRef} from '../firebase'

pedidosRef.orderByKey()

export default {
    name: 'detalhesPedido',
    data() {
        return {
            key: this.$route.params.hkey,
            pedido: null
        }
    },
    methods: {
        
    },
    mounted() {
        var pedido
        pedidosRef.child(this.key).on('value', function(snapshot) {
            pedido = snapshot.val()
        })
        this.pedido = pedido
    }
}
</script>


