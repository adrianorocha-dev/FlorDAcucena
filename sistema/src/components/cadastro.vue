<template>
    <div class="col-md-10">
        <b-form>
            <b-form-group id="nomeDoPedido"
                        label="Pedido:"
                        label-for="PedidoInput2">
            <b-form-input id="PedidoInput2"
                        type="text"
                        required
                        placeholder="">
            </b-form-input>
        </b-form-group>

        <b-form-group id="nomeCliente"
                    label="Nome do Cliente:"
                    label-for="nomeclienteInput3">
        <b-form-input id="nomeClienteInput2"
                      type="text"
                      required
                      placeholder="">
        </b-form-input>
      </b-form-group>

        <b-form-group id="descricao"
                    label="Descrição:"
                    label-for="exampleInput2">
                
                <b-form-textarea id="textarea1"
                     placeholder=""
                     v-model="text"
                     rows="3"
                     max-rows="6">
                </b-form-textarea>
      </b-form-group>

        <b-form-group id="dataDeEntrega"
                    label="Data de Entrega:"
                    label-for="entregaInput4">
        <b-form-input id="entregaInput4"
                      type="text"
                      required
                      placeholder="">
        </b-form-input>
      </b-form-group>

        <b-form-group id="tempoDeProducao"
                    label="Tempo mínimo de produção:"
                    label-for="tempoProducaoInput2">
        <b-form-input id="tempoProducaoInput2"
                      type="text"
                      required
                      placeholder="">
        </b-form-input>


      </b-form-group>

       
        


       </b-form> 
    </div>
</template>

<script>
export default {
    name: 'cadastro',
    data() {
        return {
            text: ""
        }
    }
}
</script>
