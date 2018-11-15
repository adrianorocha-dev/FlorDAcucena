<template>
    <b-container class="text-left" >

        <p><strong>Pedido: </strong>{{pedido.nomePedido}} </p>
        <p><b>Cliente: </b>{{pedido.cliente}}</p> 
        <p><b>Descrição: </b>{{pedido.descricao}}</p>
        <b-col md="8" offset-md="2" sm="12" offset-sm="0">
            <b-form>
                <b-form-group id="materiais"
                                label="Materiais:"
                                label-class="text-sm-left"
                                vertical>
                            
                            <b-form-textarea id="textarea2"
                                placeholder="Lista de Materiais"
                                v-model="materiais"
                                rows="5"
                                max-rows="5">
                            </b-form-textarea>
                </b-form-group>
                <b-button id="botaoAddMaterial">Adicionar Material</b-button>
            </b-form>
        </b-col>
        <p id="valor1"><b>Custo: R$XX,XX</b></p> 
        <p id="valor2"><b>Valor Sugerido: R$XX,XX</b></p> 
        
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

<style>
p{
    margin-bottom: 30px;
    margin-left: 200px;
}

#valor1 {
    margin-right: 50px;
}
#valor2 {
    margin-left: 250px;
}

#valor1, #valor2 {
    display: inline-block;
    margin-top: 30px;
}

#botaoAddMaterial{
    padding: 0.5rem 5rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 25px;
    background-color: #d9779a;
    border-color: #d9779a;
}

</style>
