let id = document.querySelector('#id');
const mac = document.querySelector('#mac');
const verificar_Ligado = document.querySelector('#select_Verificar_Ligado');
const funcionalidade_Olt_Huawei = document.querySelector('#select_Funcionalidade_Olt_Huawei');
const do_Velocidade_Olt = document.querySelector('#input_Do_Velocidade_Olt');
const up_Velocidade_Olt = document.querySelector('#input_Up_Velocidade_Olt');
const velocidade_Cabo_Olt = document.querySelector('#select_Velocidade_Cabo_Olt');
const do_Velocidade_Wifi_5Ghz = document.querySelector('#input_Do_Velocidade_Wifi_5Ghz');
const up_Velocidade_Wifi_5Ghz = document.querySelector('#input_Up_Velocidade_Wifi_5Ghz');
const velocidade_Wifi_5Ghz = document.querySelector('#select_Velocidade_Wifi_5Ghz');
const verificar_Leds = document.querySelector('#select_Verificar_Leds');
const modelo_Roteador = document.querySelector('#select_Modelo_Roteador');
const versao_Roteador = document.querySelector('#Select_Versao_Roteador');
const testar_PortasLan = document.querySelector('#Select_Testar_PortasLan');
const velocidade_1gb = document.querySelector('#Select_velocidade_1gb');
const status_antenas = document.querySelector('#Select_Status_Antenas');
const grau_Conservacao = document.querySelector('#input_Grau_Conservacao');
const potencia_24ghz = document.querySelector('#select_Potencia_24ghz');
const potencia_5ghz = document.querySelector('#select_Potencia_5ghz');
const ssid = document.querySelector('#select_Ssid');
const voltagem = document.querySelector('#select_voltagem');
const po_Verificar_SinalOptico = document.querySelector('#input_Po_Verificar_SinalOptico');
const sis_Verificar_SinalOptico = document.querySelector('#input_Sis_Verificar_SinalOptico');
const Verificar_sinalOptico = document.querySelector('#select_Verificar_sinalOptico');
const aquecimento = document.querySelector('#select_Aquecimento');
const atualizar_Firmware = document.querySelector('#select_Atualizar_Firmware');
const ipv6 = document.querySelector('#select_Ipv6');
const resetarRoteador = document.querySelector('#select_ResetarRoteador');
const laudo_Final = document.querySelector('#laudo_Final');
const assinatura = document.querySelector('#assinatura');

const btn_visualizar = document.querySelector('#btn_visualizar');

let ultimoID = localStorage.getItem('ultimoID') || 0;



function gerarID() {
    ultimoID++;
    const novoID = ultimoID;
    console.log(novoID)
    
    localStorage.setItem('ultimoID', ultimoID);
}
btn_visualizar.addEventListener('click', () => {
    gerarID()
    

    const docDefinition = {
        content: [
            {
                columns: [
                    {
                        text: [
                            { text: 'JÚPITER TELECOMUNICAÇÕES E INFORMÁTICA LTDA\n', style: 'header' },
                            { text: 'CNPJ: 01.625.636/0001-91, TELEFONE: (99) 3529-3131\n', style: 'subheader' },
                            { text: 'ENDEREÇO: RUA ODINEA MARTINS VIANA, Nº 15, LOTE 15, QUADRA 40-B, CONJUNTO\n', style: 'subheader' },
                            { text: 'PLANALTO II, CEP 65.900-000, IMPERATRIZ – MA\n', style: 'subheader' },
                        ],
                        margin: [10, 10, 0, 0],
                        //direita, cima,esqueda, baixo
                    },
                ],
            },
        ],
    };
    const PDF = pdfMake.createPdf(docDefinition).open();
});
