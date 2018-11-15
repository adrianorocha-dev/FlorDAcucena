<template>
        <div id="tabela">
            <b-table :fields="fields" :items="items" bordered=true outlined="true" striped="true" head-variant="light"></b-table>
        </div>
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
.btn{
    background-color: #d9779a;
    border-color: #d9779a;
}
.btn-sm{
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
