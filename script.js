const button = document.getElementById('btn')
const retorno = document.getElementById('jogada')
const ListaJogadas = [
  {
    jogada: '🟦🟦🟦🟦🟦\n🟦🟦🟦💎🟦\n🟦🟦💎🟦🟦\n🟦💎🟦🟦🟦\n🟦🟦💎🟦💎',//🟦💎
  },
  {
    jogada: '🟦🟦🟦🟦🟦\n🟦🟦🟦🟦🟦\n🟦🟦🟦🟦💎\n🟦💎🟦💎🟦\n🟦🟦💎🟦💎',
  },
  {
    jogada: '🟦🟦🟦🟦🟦\n🟦💎💎🟦🟦\n💎🟦🟦🟦🟦\n💎🟦🟦💎🟦\n🟦🟦🟦🟦🟦',
  },
  {
    jogada: '💎🟦🟦🟦🟦\n🟦🟦🟦💎🟦\n🟦🟦🟦💎🟦\n💎🟦🟦💎🟦\n🟦🟦🟦🟦🟦',
  },
  {
    jogada: '🟦🟦🟦🟦🟦\n🟦🟦💎🟦💎\n🟦🟦🟦🟦💎\n🟦🟦🟦💎🟦\n🟦🟦💎🟦🟦',
  },
  {
    jogada: '🟦🟦🟦🟦🟦\n🟦🟦🟦💎💎\n🟦🟦🟦🟦🟦\n💎🟦🟦🟦💎\n💎🟦🟦🟦🟦',
  },
  {
    jogada: '💎🟦💎🟦🟦\n🟦🟦🟦🟦🟦\n🟦🟦💎🟦🟦\n🟦💎🟦💎🟦\n🟦🟦🟦🟦🟦',
  },
  {
    jogada: '🟦💎🟦💎🟦\n🟦🟦🟦🟦🟦\n🟦🟦🟦💎💎\n🟦🟦🟦💎🟦\n🟦🟦🟦🟦🟦',
  },
  {
    jogada: '💎🟦🟦💎🟦\n🟦🟦🟦🟦🟦\n🟦🟦🟦💎🟦\n🟦🟦🟦💎🟦\n🟦🟦🟦🟦💎',
  },
  {
    jogada: '🟦🟦🟦🟦🟦\n🟦💎🟦🟦🟦\n🟦💎🟦🟦💎\n🟦🟦💎🟦🟦\n💎🟦🟦🟦🟦',
  },
  {
    jogada: '💎🟦🟦🟦💎\n💎🟦🟦🟦🟦\n🟦🟦🟦🟦🟦\n🟦🟦🟦🟦💎\n🟦🟦🟦🟦💎',
  },
  {
    jogada: '🟦💎🟦🟦🟦\n💎🟦🟦💎🟦\n🟦🟦💎🟦🟦\n🟦🟦🟦🟦💎\n🟦🟦🟦🟦🟦',
  },
  {
    jogada: '🟦🟦🟦🟦💎\n💎🟦🟦💎🟦\n🟦🟦🟦🟦🟦\n🟦🟦🟦💎🟦\n🟦🟦🟦💎🟦',
  },
  {
    jogada: '🟦🟦🟦🟦💎\n💎🟦🟦🟦🟦\n💎🟦🟦🟦🟦\n💎🟦🟦🟦🟦\n🟦🟦🟦💎🟦',
  },
  {
    jogada: '💎🟦🟦🟦🟦\n🟦🟦💎🟦💎\n🟦💎🟦🟦🟦\n🟦🟦🟦🟦🟦\n🟦🟦🟦💎🟦',
  },
  {
    jogada: '🟦💎🟦🟦🟦\n🟦🟦🟦💎🟦\n🟦💎🟦🟦🟦\n🟦🟦💎🟦🟦\n🟦🟦🟦🟦💎',
  },
  {
    jogada: '🟦🟦🟦🟦💎\n🟦🟦🟦🟦🟦\n🟦🟦💎🟦🟦\n🟦🟦🟦💎🟦\n🟦🟦🟦💎💎',
  },
  {
    jogada: '🟦🟦🟦🟦💎\n💎🟦🟦💎🟦\n🟦🟦💎🟦🟦\n🟦🟦🟦🟦🟦\n🟦🟦🟦💎🟦',
  },
  {
    jogada: '💎💎🟦🟦🟦\n🟦🟦🟦🟦💎\n🟦🟦🟦🟦💎\n🟦🟦🟦🟦🟦\n🟦🟦🟦💎🟦',
  },
  {
    jogada: '🟦🟦🟦🟦🟦\n💎🟦🟦🟦🟦\n🟦🟦🟦💎🟦\n💎💎🟦🟦🟦\n🟦🟦💎🟦🟦',
  },
  {
    jogada: '🟦🟦💎🟦🟦\n🟦🟦🟦💎🟦\n🟦🟦🟦🟦🟦\n🟦💎💎🟦🟦\n🟦🟦🟦🟦💎',
  },
  {
    jogada: '🟦🟦💎🟦💎\n💎🟦🟦🟦💎\n🟦🟦🟦🟦🟦\n🟦🟦🟦🟦🟦\n🟦🟦💎🟦🟦',
  },
]

const gerarJogada = (jogadas) => {
  retorno.innerHTML = '';

  if (jogadas.length === 0) return null

  const indiceAleatorio = Math.floor(Math.random() * jogadas.length)
  const novaJogada = jogadas[indiceAleatorio].jogada
  const arrayDeLinhas = novaJogada.split('\n')
  arrayDeLinhas.forEach((linha) => {
    const newSpan = document.createElement('span')
    newSpan.textContent = linha
    retorno.appendChild(newSpan)
  })
}

button.addEventListener('click', () => {
  gerarJogada(ListaJogadas)
})

let win = 0
let lose = 0

const winElement = document.getElementById('win')
const loseElement = document.getElementById('lose')

const incWin = () => {
  win++
  winElement.textContent = win
}
const incLose = () => {
  lose++
  loseElement.textContent = lose
}