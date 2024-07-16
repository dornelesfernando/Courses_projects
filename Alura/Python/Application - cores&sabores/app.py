import os

def exibir_nome_do_programa():
    print("""
        𝐂𝐨𝐫𝐞𝐬 & 𝐒𝐚𝐛𝐨𝐫𝐞𝐬
        """)

def exibir_opcoes():
    print('1. Cadastrar restaurante')
    print('2. Listar restaurante')
    print('3. Ativar restaurante')
    print('4. Sair\n')

def finalizar_app():
    os.system('cls')
    # os.system('clear') # no mac
    print('Finalizando o app')

def escolher_opcao():
    opcao_escolhida = int(input('Escolha uma opção: '))
    # opcao_escolhida = int(opcao_escolhida)

    match opcao_escolhida:
        case 1:
            print('Cadastrar restaurante')
        case 2:
            print('Listar restaurante')
        case 3:
            print('Ativar restaurante')
        case _:
            finalizar_app()
            
def main():
    exibir_nome_do_programa()
    exibir_opcoes()
    escolher_opcao()

if __name__ == '__main__':
    main()