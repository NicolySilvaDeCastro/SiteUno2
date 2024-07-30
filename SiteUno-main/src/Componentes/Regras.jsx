export default function Regras(){

  return (
  <div className="Regras">
  <section className="um">
  <h1>Todas as Regras do UNO</h1>
  <p>O UNO é um jogo de cartas popular e dinâmico, 
    conhecido por suas regras simples e pela capacidade 
    de criar reviravoltas emocionantes. Aqui estão todas 
    as regras básicas para jogar UNO:</p><br/>
  
    <div className="objetivo"><li >
      <strong>Objetivo do Jogo:</strong>
      <ul>
        <li>O objetivo é ser o primeiro jogador a se livrar 
          de todas as suas cartas.</li>

        <li>Quando um jogador tem apenas uma carta restante,
           ele deve dizer "UNO" para avisar os outros jogadores.</li><br/>
      </ul>
    </li></div>
    
    <div className="setup">
    <li><strong>Setup:</strong>
      <ul>
        <li>O jogo é jogado com um baralho especial UNO, que 
          consiste em cartas numeradas de 0 a 9 em quatro cores: 
          vermelho, amarelo, verde e azul. Além das cartas numeradas, 
          existem cartas de Ação (como Pular, Inverter, +2) 
          e cartas Especiais (como Coringa e +4).</li>
        <li>Distribua 7 cartas para cada jogador.</li>
        <li>Coloque a carta superior do baralho 
          no centro da mesa, virada para cima. Esta 
          é a pilha de descarte inicial.</li><br/>
          <img src="./public/unominimalista.jpg" alt="cartas do uno"/><br/>
      </ul>
    </li>
    </div>
    {/* <div className="jogando">
    <li><strong>Jogando o Jogo:</strong>
      <ul>
        <li>O jogo segue no sentido horário a partir do primeiro jogador.</li>
        <li>Um jogador deve descartar uma carta que corresponda 
          à cor ou ao número da carta no topo da pilha de descarte.</li>
        <li>Se um jogador não puder jogar, ele deve comprar uma
           carta do baralho. Se a carta comprada puder ser jogada, ela pode 
           ser jogada imediatamente. Caso contrário, o turno passa para 
           o próximo jogador.</li>
      </ul>
    </li>
    </div> */}
    </section>  

    <section className="dois">
    <div className="jogando">
    <li><strong>Jogando o Jogo:</strong>
      <ul>
        <li>O jogo segue no sentido horário a partir do primeiro jogador.</li>
        <li>Um jogador deve descartar uma carta que corresponda 
          à cor ou ao número da carta no topo da pilha de descarte.</li>
        <li>Se um jogador não puder jogar, ele deve comprar uma
           carta do baralho. Se a carta comprada puder ser jogada, ela pode 
           ser jogada imediatamente. Caso contrário, o turno passa para 
           o próximo jogador.</li><br/>
      </ul>
    </li>
    </div>
    <div className="cartas-especiais">

    <li><strong>Cartas Especiais e de Ação:</strong>
    <p>Existem várias cartas com efeitos especiais:</p>
    <img src="./public/uno.png" alt="cartas especiais e de ação do uno"/><br/>

      <ul>
        <li><strong>+4 Coringa:</strong> Semelhante ao Coringa, mas o próximo jogador deve comprar quatro cartas e perder sua vez.</li>
        <li><strong>Pular:</strong> Pula o próximo jogador na sequência.</li>
        <li><strong>+2:</strong> O próximo jogador deve comprar duas cartas e perder sua vez.</li>
        <li><strong>Coringa:</strong> Pode ser jogada em qualquer momento e permite ao jogador escolher a próxima cor a ser jogada.</li>
        <li><strong>Inverter:</strong> Inverte a direção do jogo.</li><br/>
      </ul>
    </li>
    </div>
    
    <li><strong>Final do Jogo:</strong>
      <ul>
        <li>O jogo continua até que um jogador descarte sua última carta.</li>
        <li>O vencedor é o jogador que se livrar de todas as suas cartas primeiro.</li>
        {/* <img className="uno-img" src="./public/uno.jpg" alt="UNO!"/> */}
      </ul>
    </li>
  </section>
 </div>
  );
}

