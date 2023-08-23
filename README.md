# Jogo da cobrinha em JavaScript

Este é um pequeno projeto de um jogo da cobrinha (Snake) criado em JavaScript usando a API de desenho em canvas. O jogo permite que o jogador controle uma cobra, movendo-a pelo campo para coletar comida e ganhar pontos. Aqui está uma explicação de cada função e constante no código:

## Constantes e Variáveis

- `canvas` e `ctx`: Representam o elemento de canvas e o contexto 2D para desenhar no canvas.
- `audio`: Um objeto de áudio que reproduz o som de um arquivo de áudio.
- `ponto`, `pontuacaoFinal`, `menu`, `botaoPlay`: Referências para elementos HTML que exibem a pontuação, a pontuação final, o menu e o botão de início do jogo.
- `tamanho`: O tamanho dos elementos da cobra e da comida.
- `direcao`: A direção atual da cobra.
- `loopId`: O identificador para o loop do jogo.
- `posicaoInicial`: A posição inicial da cabeça da cobra.
- `snake`: Um array que representa as posições dos segmentos da cobra.
- `comida`: Um objeto que armazena as coordenadas e a cor da comida.

## Funções

- `aumentaPonto()`: Aumenta a pontuação do jogador em 10 pontos.
- `drawSnake()`: Desenha os segmentos da cobra no canvas.
- `randomNumber(min, max)`: Gera um número aleatório dentro do intervalo especificado.
- `randomPosition()`: Gera uma posição aleatória para a comida.
- `drawComida()`: Desenha a comida no canvas.
- `moveSnake()`: Move a cobra para uma nova posição com base na direção atual.
- `drawGrid()`: Desenha uma grade no canvas.
- `checkComida()`: Verifica se a cobra colidiu com a comida e atualiza a posição da comida.
- `checkColisao()`: Verifica se a cobra colidiu com a parede ou com ela mesma.
- `gameOver()`: Encerra o jogo, exibindo o menu e a pontuação final.
- `gameLoop()`: Função principal do loop do jogo, que atualiza e desenha os elementos do jogo a cada iteração.
- Event Listener `keydown`: Captura as teclas pressionadas para alterar a direção da cobra.
- Event Listener `botaoPlay`: Inicia o jogo, redefinindo a pontuação e escondendo o menu.

## Execução do Jogo

O jogo é executado chamando a função `gameLoop()` que é responsável por atualizar a lógica do jogo e o desenho no canvas em um loop. O jogador pode controlar a direção da cobra usando as teclas de seta. A cobra deve coletar a comida para aumentar a pontuação. Se a cobra colidir com a parede ou com ela mesma, o jogo exibirá o menu de game over.

