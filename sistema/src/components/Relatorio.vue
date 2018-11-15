<template>
    <b-container id="contRel">
        <div id="tabelaRel">
            <b-table :fields="fields" :items="items" bordered=true outlined="true" striped="true"></b-table>
        </div>
        <div>
            <router-link id="linkGeraRel" to="/DadosRelatorio">Gerar Relatório Mensal</router-link> 
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
    border-top: 100px;
    color: white;
    border-left: 150px;
}

#tabelaRel {
    padding-left: 2px;
    padding-right: 2px;
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
