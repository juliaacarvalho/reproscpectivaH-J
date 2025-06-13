document.addEventListener('DOMContentLoaded', function () {
  const proximaTelaBtn = document.getElementById('proxima-tela');
  const audio = document.getElementById('player-musica');
  const mostrarBtn = document.getElementById('mostrarBtn');
  const mensagemTexto = document.getElementById('mensagemTexto');
  const mensagemBox = document.getElementById('mensagemBox');

  const textoCompleto = `Eu me encontrei no universo quando encontrei os seus olhos. Amar você é inevitável. Te amo de forma louca e intensa, como um solo de guitarra do Guns N' Roses.`;

  const textoResumido = `Eu me encontrei no universo quando encontrei os seus olhos. Amar você é inevitável.`;

  let expandido = false;

  // Gatilho para botão da próxima tela
  proximaTelaBtn.addEventListener('click', function () {
    window.location.href = 'tela3.html';
  });

  // Inicia o áudio automaticamente quando a tela carrega
  audio.play().catch(function (error) {
    console.log('Autoplay bloqueado pelo navegador:', error);
  });

  if (mostrarBtn && mensagemTexto && mensagemBox) {
    mensagemTexto.textContent = textoResumido;
    mostrarBtn.textContent = "Mostrar Mensagem";
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
        mostrarBtn.textContent = "Mostrar Mensagem";
        mensagemBox.classList.remove('expanded');
      }
    });
  }
});
