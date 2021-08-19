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

export const getCardNo = (type) => {
  return cardNo[type];
};

// Fisher-Yates algorithm
export const shuffle = (array) => {
  const copyArray = [...array];

  for (let i = copyArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];
  }
  return copyArray;
};

const checkCompletedDeck = (cards) => {
  const completedDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return cards.join().includes(completedDeck.join());
};

export const moveCards = (cardDecks, source, destination) => {
  const sourceCardIndex = source.index;
  const sourceDeckId = source.droppableId;
  const sourceDeck = { ...cardDecks[sourceDeckId] };

  const destinationCardIndex = destination.index;
  const destinationDeckId = destination.droppableId;
  const destinationDeck = { ...cardDecks[destinationDeckId] };

  const selectedCardList = sourceDeck.cards.splice(sourceCardIndex);

  let isDragSuccessful = false;

  const parentCardNo =
    destinationDeck.cards[destinationCardIndex - 1];

  const isNextCard =
    destinationCardIndex === 0 ||
    selectedCardList[0] === parentCardNo + 1;

  if (isNextCard) {
    destinationDeck.cards.push(...selectedCardList);
    isDragSuccessful = true;

    if (sourceDeck.visibleCardCount === selectedCardList.length) {
      sourceDeck.visibleCardCount = 1;
    } else {
      sourceDeck.visibleCardCount -= selectedCardList.length;
    }
    destinationDeck.visibleCardCount += selectedCardList.length;
  } else {
    sourceDeck.cards.push(...selectedCardList);
  }

  const isThereACompletedDeck = checkCompletedDeck(
    destinationDeck.cards
  );

  if (isThereACompletedDeck) {
    destinationDeck.cards.splice(-13);
    destinationDeck.visibleCardCount -=
      destinationDeck.visibleCardCount === 13 ? 12 : 13;
  }

  return {
    newCardDecks: {
      ...cardDecks,
      [sourceDeckId]: sourceDeck,
      [destinationDeckId]: destinationDeck,
    },
    isThereACompletedDeck,
    isDragSuccessful,
  };
};

export const deal = (
  cardDecks,
  dealingCards,
  playCannotDealSound
) => {
  const copyCardDecks = { ...cardDecks };
  const copyDealingDecks = [...dealingCards];

  const a = Object.values(copyCardDecks).every(
    (deck) => deck.cards.length > 0
  );

  if (a) {
    const dealCards = copyDealingDecks.pop();

    if (dealCards) {
      /* eslint-disable no-param-reassign */
      Object.entries(copyCardDecks).forEach(([, deck]) => {
        deck.cards.push(dealCards.shift());
        deck.visibleCardCount += 1;
      });
      /* eslint-enable no-param-reassign */
    }
  } else {
    playCannotDealSound();
  }

  return [{ ...copyCardDecks }, [...copyDealingDecks]];
};

export const getRandomDecks = () => {
  const cardList = Object.entries(cardCounts)
    .map(([cardType, count]) => Array(count).fill(cardNo[cardType]))
    .flat();

  const shuffledCardList = shuffle(cardList);

  return [
    {
      deck1: {
        // cards: shuffledCardList.slice(0, 6),
        cards: [10, 11, 12],
        visibleCardCount: 3,
      },
      deck2: {
        // cards: shuffledCardList.slice(6, 12),
        cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        visibleCardCount: 10,
      },
      deck3: {
        // cards: shuffledCardList.slice(12, 18),
        cards: [12, 13],
        visibleCardCount: 2,
      },
      deck4: {
        // cards: shuffledCardList.slice(18, 24),
        cards: [],
        visibleCardCount: 1,
      },
      deck5: {
        // cards: shuffledCardList.slice(24, 29),
        cards: [],
        visibleCardCount: 1,
      },
      deck6: {
        // cards: shuffledCardList.slice(29, 34),
        cards: [],
        visibleCardCount: 1,
      },
      deck7: {
        // cards: shuffledCardList.slice(34, 39),
        cards: [],
        visibleCardCount: 1,
      },
      deck8: {
        // cards: shuffledCardList.slice(39, 44),
        cards: [],
        visibleCardCount: 1,
      },
      deck9: {
        // cards: shuffledCardList.slice(44, 49),
        cards: [],
        visibleCardCount: 1,
      },
      deck10: {
        // cards: shuffledCardList.slice(49, 54),
        cards: [],
        visibleCardCount: 1,
      },
    },
    [
      shuffledCardList.slice(54, 64),
      shuffledCardList.slice(64, 74),
      shuffledCardList.slice(74, 84),
      shuffledCardList.slice(84, 94),
      shuffledCardList.slice(94, 104),
    ],
  ];
};

export const newGame = (
  setCardDecks,
  setDealingDecks,
  setGameStats
) => {
  const [cDecks, dDecks] = getRandomDecks();
  setCardDecks(cDecks);
  setDealingDecks(dDecks);
  setGameStats({
    completedDeckCount: 0,
    score: 500,
    moves: 0,
  });
};

export const getIndexWhichNextCardsDraggable = (deck) => {
  // Deck: X X X 4 5 6 1 2
  // Visible Cards Starting Index: 3 => X X X [4] 5 6 1 2

  // EXAMPLE: X X X X X 5 10 Q K 8 9 10 J Q K
  const visibleCardsStartingIndex =
    deck.cards.length - deck.visibleCardCount;

  let firstIndexOfOrderedCards = visibleCardsStartingIndex;
  let nextCard;
  let currentCard;

  for (
    let i = visibleCardsStartingIndex;
    i < deck.cards.length;
    i += 1
  ) {
    currentCard = deck.cards[i];
    nextCard = deck.cards[i + 1];

    if (nextCard && currentCard + 1 !== nextCard) {
      firstIndexOfOrderedCards = i + 1;
    }
  }

  return firstIndexOfOrderedCards;
};

export const getOrderedCardListsFromDecks = (cardDecks) => {
  const orderedCardListsFromDecks = [];

  Object.entries(cardDecks).forEach(([, deck]) => {
    orderedCardListsFromDecks.push({
      startingIndex: getIndexWhichNextCardsDraggable(deck),
      cards: deck.cards.slice(getIndexWhichNextCardsDraggable(deck)),
    });
  });

  return orderedCardListsFromDecks;
};

export const getHint = (cardDecks) => {
  const orderedCardLists = getOrderedCardListsFromDecks(cardDecks);
  const hints = [];

  for (
    let sourceDeckNo = 0;
    sourceDeckNo < orderedCardLists.length;
    sourceDeckNo += 1
  ) {
    const sourceDeck = orderedCardLists[sourceDeckNo];

    for (
      let subSourceDeckStartingIndex = 0;
      subSourceDeckStartingIndex < sourceDeck.cards.length;
      subSourceDeckStartingIndex += 1
    ) {
      for (
        let destinationDeckNo = 0;
        destinationDeckNo < orderedCardLists.length;
        destinationDeckNo += 1
      ) {
        const destinationDeck = orderedCardLists[destinationDeckNo];

        // (a && b && c) || (a && b') = (a && b') || (a && c)
        // a : the first card of the deck to be dragged must match the last card of destination
        // b : the parent of the child deck to be dragged must be the same as the parent of the destination
        // c : the deck containing the sub-deck to be dragged must be shorter than the destination deck

        if (
          (sourceDeck.cards
            .slice(subSourceDeckStartingIndex)
            .at(0) ===
            destinationDeck.cards.at(-1) + 1 &&
            sourceDeck.cards.at(
              sourceDeck.startingIndex +
                subSourceDeckStartingIndex -
                1
            ) !== destinationDeck.cards.at(-1)) ||
          (sourceDeck.cards
            .slice(subSourceDeckStartingIndex)
            .at(0) ===
            destinationDeck.cards.at(-1) + 1 &&
            destinationDeck.cards.length > sourceDeck.cards.length)
        ) {
          hints.push({
            sourceDeckId: `deck${sourceDeckNo + 1}`,
            destinationDeckId: `deck${destinationDeckNo + 1}`,
            sourceStartingIndex: subSourceDeckStartingIndex,
            destinationStartingIndex: destinationDeck.startingIndex,
          });
        }

        /*
          sourceDeck.cards.slice(subSourceDeckStartingIndex).at(0) ===
            destinationDeck.cards.at(-1) + 1 &&
          sourceDeck.cards.at(
            sourceDeck.startingIndex + subSourceDeckStartingIndex - 1
          ) !== destinationDeck.cards.at(-1)
        */
      }
    }
  }

  return shuffle(hints)[0];
};
