document.addEventListener('DOMContentLoaded', function () {
  console.log("Script carregado e rodando!");
  // CONTADOR DE TEMPO
  function atualizarContador() {
    const inicio = new Date('2022-10-21T00:00:00');
    const agora = new Date();
    let diff = agora - inicio;

    const anos = agora.getFullYear() - inicio.getFullYear();
    const meses = agora.getMonth() - inicio.getMonth() + anos * 12;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = agora.getHours() - inicio.getHours();
    const minutos = agora.getMinutes() - inicio.getMinutes();
    const segundos = agora.getSeconds() - inicio.getSeconds();

    document.getElementById('anos').textContent = Math.floor(meses / 12);
    document.getElementById('meses').textContent = meses % 12;
    document.getElementById('dias').textContent = dias % 30;
    document.getElementById('horas').textContent = (horas + 24) % 24;
    document.getElementById('minutos').textContent = (minutos + 60) % 60;
    document.getElementById('segundos').textContent = (segundos + 60) % 60;
  }
  setInterval(atualizarContador, 1000);
  atualizarContador();

  // PLAYER DE ÁUDIO (play/pause)
  const player = document.getElementById('player');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const playIcon = document.getElementById('play-icon');
  if (player && playPauseBtn && playIcon) {
    playPauseBtn.addEventListener('click', function () {
      if (player.paused) {
        player.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
      } else {
        player.pause();
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
      }
    });
  }

  // MENSAGEM ESPECIAL
  const mostrarBtn = document.getElementById('mostrarBtn');
  const mensagemTexto = document.getElementById('mensagemTexto');
  const mensagemBox = document.getElementById('mensagemBox');

  const textoCompleto = `Eu me encontrei no universo quando encontrei os seus olhos. Amar você é inevitável. Te amo de forma louca e intensa, como um solo de guitarra do Guns N' Roses.`;

  const textoResumido = `Eu me encontrei no universo quando encontrei os seus olhos. Amar você é inevitável.`;

  let expandido = false;

  if (mostrarBtn && mensagemTexto && mensagemBox) {
    mensagemTexto.textContent = textoResumido; // Isso já preenche o texto ao carregar!
    mostrarBtn.textContent = "Mostrar mensagem";
    mensagemBox.classList.remove('expanded');

    mostrarBtn.addEventListener('click', function (e) {
      e.preventDefault();
      expandido = !expandido;
      if (expandido) {
        mensagemTexto.innerHTML = textoCompleto.replace(/\n/g, '<br>');
        mostrarBtn.textContent = "Mostrar menos";
        mensagemBox.classList.add('expanded');
      } else {
        mensagemTexto.textContent = textoResumido;
        mostrarBtn.textContent = "Mostrar mensagem ▼";
        mensagemBox.classList.remove('expanded');
      }
    });
  }

  // BOTÃO "VAMOS LÁ" (mostrar vídeo)
  const botaoVamosLa = document.getElementById('botaoVamosLa');
  const conviteRetrospectiva = document.getElementById('conviteRetrospectiva');
  const telaVideo = document.getElementById('tela-video');
  if (botaoVamosLa && conviteRetrospectiva && telaVideo) {
    botaoVamosLa.addEventListener('click', function () {
      conviteRetrospectiva.classList.add('hidden');
      telaVideo.classList.remove('hidden');
      const video = document.getElementById('video-retrospectiva');
      if (video) {
        video.play();
      }
    });
  }

  // BOTÃO "CLIQUE AQUI" (próxima tela)
  const proximaTelaBtn = document.getElementById('proxima-tela');
  if (proximaTelaBtn) {
    proximaTelaBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = 'tela3.html';
    });
  }
});