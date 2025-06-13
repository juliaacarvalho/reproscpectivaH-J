document.addEventListener('DOMContentLoaded', function () {
  const colorList = document.getElementById('colorList');
  const mensagens = [
    "TRÊS DIAS DOS NAMORADOS JUNTOS! 💕",
    "INICIO DE UMA VIDA INTEIRA... 💕",
    "E QUE SORTE A NOSSA, HEIN? 💕",
    "TUDO COMEÇOU EM 21/10/2022 📅",
    "TE AMO! 💞",
    "TE QUERO! 💞",
    "TE VIVO! 💞",
    "EU AMO VOCÊ, MENINO! ❤️‍🔥",
    "VOCÊ É MEU MELHOR AMIGO!",
    "NOSSA HISTÓRIA SÓ ESTÁ COMEÇANDO!"
  ];
  const cores = [
    "#800000", "#8B0000", "#B22222", "#A52A2A", "#DC143C", "#CD5C5C"
  ];

  // Cria as tiras coloridas
  mensagens.forEach((texto, i) => {
  const tira = document.createElement('div');
  tira.className = 'color-strip';
  tira.style.background = cores[i % cores.length];
  tira.textContent = texto;
  colorList.appendChild(tira);
});

  const duracaoAnimacao = mensagens.length * 1.5; // 1.5s por tira, ajuste como quiser
  colorList.style.animation = `scrollUp ${duracaoAnimacao}s linear 1`;

  // Após a animação, mostra mensagem final
  setTimeout(() => {
    colorList.style.display = 'none';
    mostrarMensagemFinal();
  }, 12000);

  function calcularDias() {
    const dataInicio = new Date('2022-10-21');
    const hoje = new Date();
    const diffTime = Math.abs(hoje - dataInicio);
    const diffDias = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDias;
  }

  function mostrarMensagemFinal() {
    const phoneFrame = document.querySelector('.phone-frame');
    const mensagemFinal = document.createElement('div');
    mensagemFinal.className = 'mensagem-final';

    const diasTexto = document.createElement('p');
    diasTexto.textContent = `${calcularDias()} dias juntos desde 21/10/2022`;
    diasTexto.style.fontSize = '2.1em'; // maior
    diasTexto.style.fontWeight = 'bold';
    diasTexto.style.marginBottom = '24px';
    diasTexto.style.textAlign = 'center';

    const fraseFofa = document.createElement('p');
    fraseFofa.textContent = 'Tem sido os melhores dias da minha vida! Te amo muito!❤️';
    fraseFofa.style.fontSize = '1.5em'; // maior
    fraseFofa.style.margin = 0;
    fraseFofa.style.textAlign = 'center';

    mensagemFinal.appendChild(diasTexto);
    mensagemFinal.appendChild(fraseFofa);

    phoneFrame.appendChild(mensagemFinal);

    // Chuva de corações
    criarChuvaDeCoracoes(phoneFrame);
  }

  function criarChuvaDeCoracoes(container) {
    const quantidade = 30;
    for (let i = 0; i < quantidade; i++) {
      const coracao = document.createElement('div');
      coracao.className = 'cora-chuva';
      coracao.innerHTML = '❤️';
      coracao.style.left = `${(i / quantidade) * 100}%`;
      coracao.style.animationDelay = (i * 0.18 + Math.random() * 0.2) + 's';
      coracao.style.fontSize = (Math.random() * 18 + 28) + 'px';
      container.appendChild(coracao);
    }
  }

  // --- Carrossel de cartas ---
  const carousel = document.querySelector('.card-carousel');
  let cards = document.querySelectorAll('.card');

  // Referência ao player de áudio (adicione um <audio id="player" ...> no HTML se ainda não tiver)
  const player = document.getElementById('player');
  let musicaIniciada = false;

  function iniciarMusica() {
    if (player && !musicaIniciada) {
      player.play();
      musicaIniciada = true;
    }
  }

  function atualizarCards() {
    cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.style.zIndex = cards.length - index;
      card.style.transform = `translateX(${15 * index}px) scale(${1 - index * 0.05})`;
      card.style.opacity = 1 - index * 0.2;
    });
  }
  atualizarCards();

  // Clique para avançar e tocar música no primeiro clique
  carousel.addEventListener('click', () => {
    iniciarMusica();
    carousel.appendChild(cards[0]);
    atualizarCards();
  });

  // Arrastar para o lado (touch e mouse)
  let startX = null;
  let dragging = false;

  function onDragStart(e) {
    dragging = true;
    startX = e.touches ? e.touches[0].clientX : e.clientX;
  }
  function onDragMove(e) {
    if (!dragging) return;
    // ...opcional...
  }
  function onDragEnd(e) {
    if (!dragging) return;
    dragging = false;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    if (startX - endX > 40) {
      iniciarMusica();
      carousel.appendChild(cards[0]);
      atualizarCards();
    } else if (endX - startX > 40) {
      iniciarMusica();
      carousel.insertBefore(cards[cards.length - 1], cards[0]);
      atualizarCards();
    }
    startX = null;
  }

  carousel.addEventListener('mousedown', onDragStart);
  carousel.addEventListener('mousemove', onDragMove);
  carousel.addEventListener('mouseup', onDragEnd);
  carousel.addEventListener('mouseleave', () => { dragging = false; });

  carousel.addEventListener('touchstart', onDragStart);
  carousel.addEventListener('touchmove', onDragMove);
  carousel.addEventListener('touchend', onDragEnd);

});


// Remova o CSS daqui e coloque-o em um arquivo .css ou dentro de uma tag <style> no HTML.


