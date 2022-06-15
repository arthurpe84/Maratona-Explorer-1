const elementoRespostas = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const btnPergunta = document.querySelector('#btnPergunta')

const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

// Clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite sua Pergunta!')
    return
  }

  btnPergunta.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  // Gerar numero aleatório
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoRespostas.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoRespostas.style.opacity = 1

  // Sumir a resposta depois de 3 segundos
  setTimeout(function () {
    elementoRespostas.style.opacity = 0
    btnPergunta.removeAttribute('disabled')
  }, 3000)
}
