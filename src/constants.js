export const ROC = "ROCK"
export const PAP = "PAPER"
export const SCI = "SCISSORS"

export const getEmojiForChoice = {
  'ROCK': 'punch',
  'PAPER': 'raised_hand',
  'SCISSORS': 'v'
}

export const initialState = {
  launch: true,
  playerTally: 0,
  computerTally: 0
};

export const newGameState = {
  playerChoice: undefined,
  computerChoice: undefined,
  timer: 4,
  timerShown: false,
  result: undefined
};