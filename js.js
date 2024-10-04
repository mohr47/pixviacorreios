/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
function formatarMoeda(element) {
            let valor = element.value.replace(/\D/g, '');  // Remove tudo que não for dígito
            valor = (valor / 100).toFixed(2) + '';  // Converte para formato decimal
            valor = valor.replace('.', ',');  // Substitui ponto por vírgula
            element.value = 'R$ ' + valor;
}

function formatCPF(cpf) {
            // Remove todos os caracteres que não sejam números
            cpf = cpf.replace(/\D/g, '');

            // Adiciona os pontos e o traço na posição correta
            cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
            cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
            cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

            return cpf;
        }
        function maskCPF(input) {
            input.value = formatCPF(input.value);
        }
        
function formatPhone(phone) {
    // Remove todos os caracteres que não sejam números
    phone = phone.replace(/\D/g, '');

    // Adiciona o parêntese no DDD e espaço após o DDD
    phone = phone.replace(/(\d{2})(\d)/, "($1) $2");

    // Verifica se o número tem 9 dígitos (celular) ou 8 dígitos (fixo) para adicionar o traço
    if (phone.length > 10) {
        phone = phone.replace(/(\d{5})(\d{1,4})$/, "$1-$2");
    } else {
        phone = phone.replace(/(\d{4})(\d{1,4})$/, "$1-$2");
    }

    return phone;
}

function maskPhone(input) {
    input.value = formatPhone(input.value);
}

//=============================================================================================================

document.getElementById('formLoginFalso').addEventListener(
        'submit', function(){
            event.preventDefault();
            
            const nome = document.formLoginFalso.nome.value;
            const valor = document.formLoginFalso.valor.value;
            
            alert("Parabéns por cair em um golpe " + nome + ", você perdeu " + valor + ", da próxima vez, veja se a URL é a correta e se o site é confiável.");

        });