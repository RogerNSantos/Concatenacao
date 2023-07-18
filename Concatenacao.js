
/* Definição das Variáveis */
var js_nome;
var js_sobrenome;
var js_nomecompleto;

/*NOME DA FUÇÃO*/
function concatena() {
    /* Entrada de Dados */
    js_nome = document.FormConcatena.f_nome.value;/*f_nome - PREFIXO*/

    js_sobrenome = document.FormConcatena.f_sobrenome.value;/*Capturar (ler) sobre nome*/
    /* Processamento de Dados */
    js_nomecompleto = js_nome  + js_sobrenome; /*Concatenar (juntar) os nomes digitados*/
    /* Saída de Dados */
    window.alert('Ol\u00e1 ' + js_nomecompleto);/*Apresentar o nome completo - window objeto/ alert metodo*/
}

