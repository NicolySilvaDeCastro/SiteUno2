export default function ComoJogar(){

  return (
<div className="Como-Jogar">
  <div className="esquerda">
      <h1>Tutorial de Como Jogar UNO</h1>
      <p>Jogar UNO é fácil de aprender e oferece 
      muita diversão para todas as idades. Aqui 
      está um tutorial passo a passo para começar:</p><br/>
  
        <ol>
        <li className="subtitulo"><strong>Setup:</strong>
        <ul>
        <li>Distribua 7 cartas para cada jogador.</li>
        <li>Coloque a carta superior do baralho no 
          centro da mesa, virada para cima, para 
          iniciar a pilha de descarte.</li><br/>
        </ul>
        </li>
    
        <li><strong>Turno do Jogador:</strong>
        <ul>

        <li>O jogo começa com o primeiro jogador no sentido horário.</li>
        <li>Durante seu turno, um jogador deve descartar uma 
          carta da sua mão que corresponda à cor ou ao número da carta 
          no topo da pilha de descarte.</li>

        <li>Se não puder jogar, o jogador deve comprar uma carta do 
          baralho. Se a carta comprada puder ser jogada, ela pode ser 
          jogada imediatamente. Caso contrário, o turno passa para o 
          próximo jogador.</li><br/>

        </ul>
        </li>
    
        <li><strong>Cartas Especiais:</strong>
        <ul>
        <li><strong>Cartas de Número:</strong> Descarte uma carta que 
        corresponda ao número ou à cor da carta superior na pilha de 
        descarte.</li><br/>

        <li><strong>Cartas de Ação:</strong>
        <ul>

        <li><strong>Pular:</strong> Pula o próximo jogador na sequência.</li>
        <li><strong>Inverter:</strong> Inverte a direção do jogo.</li>
        <li><strong>+2:</strong> O próximo jogador deve comprar duas cartas
         e perder sua vez.</li>

        </ul>
        </li>

        <li><strong>Coringa:</strong> Pode ser jogada em qualquer momento 
        e permite ao jogador escolher a próxima cor a ser jogada.</li>

        <li><strong>+4 Coringa:</strong> Semelhante ao Coringa, mas o próximo 
        jogador deve comprar quatro cartas e perder sua vez.</li><br/>

        </ul>
        </li>
    
        <li><strong>Final do Jogo:</strong>
        <ul>
        <li>Continue jogando até que um jogador descarte sua última carta.</li>
        <li>O vencedor é o jogador que se livrar de todas as suas cartas primeiro.</li>
        </ul>
        </li>
        </ol>
        </div>
        <div className="direita">
        <img src="/public/Uno-Minimalista-2.jpg" alt="uno minimalista"/>
        </div>
    </div>
  );
}

