const cardNo = {
  back: 0,
  ace: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  siv: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  jack: 11,
  queen: 12,
  king: 13,
};

const cardCounts = {
  ace: 8,
  two: 8,
  three: 8,
  four: 8,
  five: 8,
  siv: 8,
  seven: 8,
  eight: 8,
  nine: 8,
  ten: 8,
  jack: 8,
  queen: 8,
  king: 8,
};

export function getCardNo(type) {
  return cardNo[type];
}

function shuffle(array) {
  const copyArray = [...array];

  for (let i = copyArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];
  }
  return copyArray;
}

export function getRandomDecks() {
  const cardList = Object.entries(cardCounts)
    .map(([cardType, count]) => Array(count).fill(cardNo[cardType]))
    .flat();

  const shuffledCardList = shuffle(cardList);

  return {
    deck1: {
      cards: shuffledCardList.slice(0, 6),
      visibleCardCount: 1,
    },
    deck2: {
      cards: shuffledCardList.slice(6, 12),
      visibleCardCount: 1,
    },
    deck3: {
      cards: shuffledCardList.slice(12, 18),
      visibleCardCount: 1,
    },
    deck4: {
      cards: shuffledCardList.slice(18, 24),
      visibleCardCount: 1,
    },
    deck5: {
      cards: shuffledCardList.slice(24, 29),
      visibleCardCount: 1,
    },
    deck6: {
      cards: shuffledCardList.slice(29, 34),
      visibleCardCount: 1,
    },
    deck7: {
      cards: shuffledCardList.slice(34, 39),
      visibleCardCount: 1,
    },
    deck8: {
      cards: shuffledCardList.slice(39, 44),
      visibleCardCount: 1,
    },
    deck9: {
      cards: shuffledCardList.slice(44, 49),
      visibleCardCount: 1,
    },
    deck10: {
      cards: shuffledCardList.slice(49, 54),
      visibleCardCount: 1,
    },
    dealDeck1: {
      cards: shuffledCardList.slice(54, 64),
      visibleCardCount: 0,
    },
    dealDeck2: {
      cards: shuffledCardList.slice(64, 74),
      visibleCardCount: 0,
    },
    dealDeck3: {
      cards: shuffledCardList.slice(74, 84),
      visibleCardCount: 0,
    },
    dealDeck4: {
      cards: shuffledCardList.slice(84, 94),
      visibleCardCount: 0,
    },
    dealDeck5: {
      cards: shuffledCardList.slice(94, 104),
      visibleCardCount: 0,
    },
  };
}
