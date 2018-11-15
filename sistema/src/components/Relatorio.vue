<template>
    <b-container id="contRel">
        <div id="tabela">
            <b-table :fields="fields" :items="items" bordered=true outlined="true" striped="true"></b-table>
            <template>
                <router-link id="linkGeraRel" to="/DadosRelatorio">Gerar Relatório Mensal</router-link>
            </template>
        </div>
    </b-container>
</template>

<script>

export default {
    name: 'ListarPedidos',
    data(){
        return{
            fields: [
                { key: 'mesAtividade', label: 'Mês'},
                { key: 'fixos', label: 'Custos Fixos' },
                { key: 'variaveis', label: 'Custos Variáveis' },
                { key:'total', label: 'Total'},
                { key:'lucro', label: 'Lucro'}
            ]
        }
    }
}
</script>

<style>
#linkGeraRel{
    background-color: #d9779a;
    border-color: #d9779a;
    padding: 5px 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 25px;
    margin-top: 30px;
    color: white;
}

#tabela {
    margin-left: 50px;
    margin-right: 50px;
    font-weight: bold;
}

</style>
