from modelos.avaliacao import Avaliacao
from modelos.cardapio.item_cardapio import ItemCardapio

class Restaurante:
    '''Representa um restaurante e suas características.'''

    restaurantes = []

    def __init__(self, nome, categoria):
        '''
        Inicializa uma instância de Restaurante.

        Parâmetros
        - nome (str): O nome do restaurante.
        - categoria (str): A categoria do restaurante.
        '''
        self._nome = nome.title()
        self._categoria = categoria.upper()
        self._ativo = False
        self._avaliacao  = []
        self._cardapio = []
        Restaurante.restaurantes.append(self)

    def __str__(self): 
        '''Retorna uma representação em string do restaurante'''
        return f'Nome: {self._nome}, Categoria: {self._categoria}'
    
    @classmethod
    def listar_restaurantes(cls):
        '''Exibe uma lista de todos os restaurantes cadastrados'''
        print(f'{'Nome do restaurante'.ljust(25)} | {'Categoria'.ljust(25)} | {'Avaliação'.ljust(25)} | {'Status'}')
        for restaurante in cls.restaurantes:
            print(f'{restaurante._nome.ljust(25)} | {restaurante._categoria.ljust(25)} | {str(restaurante.media_avaliacoes).ljust(25)} | {restaurante.ativo}')

    @property
    def ativo(self):
        '''Retorna uma representação em string da atividade do restaurante.'''
        return 'Verdadeiro' if self._ativo else 'Falso'

    def alternar_estado(self):
        '''Alterna o estado de atividade do restaurante.'''
        self._ativo = not self._ativo

    def receber_avaliacao(self, cliente='', nota=0):
        '''
        Registra uma avaliação para o restaurante.
        
        Parâmetros:
        - cliente(str): O nome do cliente que fez a avaliação.
        - nota(float): A nota dada pelo cliente (entre 1 e 5).
        '''
        if 0 < nota <= 5:
            avaliacao = Avaliacao(cliente, nota)
            self._avaliacao.append(avaliacao)

    @property
    def media_avaliacoes(self):
        '''Calcula e retorna a média das avaliações do restaurante.'''
        if not self._avaliacao:
            return '-'
        soma_das_notas = sum(avaliacao._nota for avaliacao in self._avaliacao)
        quantidade_de_notas = len(self._avaliacao)
        media = round(soma_das_notas / quantidade_de_notas, 1) 
        return media

    def adicionar_no_cardapio(self, item):
        if isinstance(item, ItemCardapio):
            self._cardapio.append(item)

    @property
    def exibir_cardapio(self):
        print(f'Cardápio do restaurante {self._nome}\n')
        for i,item in enumerate(self._cardapio, 1):
            if hasattr(item, 'descricao'):
                mensagem_prato = f'{i}. Nome: {item._nome.ljust(25)} | Preço: R${item._preco:.2f} | Descrição: {item.descricao}'
                print(mensagem_prato)
            elif hasattr(item, 'tamanho'):
                mensagem_bebida = f'{i}. Nome: {item._nome.ljust(25)} | Preço: R${item._preco:.2f} | Tamanho: {item.tamanho}'
                print(mensagem_bebida)
            else:
                mensagem_sobremesa = f'{i}. Nome: {item._nome.ljust(25)} | Preço: R${item._preco:.2f} | Sabor: {item.sabor}'
                print(mensagem_sobremesa)
