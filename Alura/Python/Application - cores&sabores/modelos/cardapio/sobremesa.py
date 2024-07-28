from modelos.cardapio.item_cardapio import ItemCardapio

class Sobremesa(ItemCardapio):
    def __init__(self, nome, preco, sabor):
        super().__init__(nome, preco)
        self.sabor = sabor
    
    def __str__(self):
        return f'{self._nome.ljust(25)} | R${str(self._preco).ljust(25)}'
    
    def aplicar_desconto(self):
        self._preco -= (self._preco * 0.10)