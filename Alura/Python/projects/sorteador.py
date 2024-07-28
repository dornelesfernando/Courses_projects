'''
    Receber a quantidade de números a serem sorteados
    dar um range inicial
    Dar um range final

    Sortear
    reiniciar

    Histórico de Números sorteados
'''
import random
import os

settings = [{'qtd_numbers': 1, 'low': 1, 'high': 50}]

def inserindo_valores():
    settings['qtd_numbers'] = int(input('Insira quantos números deseja sortear: '))
    print('Insira um range: (mínimo, máximo)')
    settings['low'] = int(input('Valor mínimo: '))
    settings['high'] = int(input('Valor máximo: '))
    print(f'({settings['low']}, {settings['high']})')

def settings_menu():
    os.system('cls')
    print('''
        - Menu - 
            (Caso queira alterar, insira o número correspondente a função desejada)
            1. Alterar quantidadede números sorteados
            2. Alterar Range 
    
        Aperte ENTER para sortear os valores
    ''')

def sort():
    sorted_number = random.randint(settings['low'], settings['high'])
    print(sorted_number)

def main():
    os.system('cls')

if __name__ == '__main__':
    main()
    inserindo_valores()
    settings_menu()