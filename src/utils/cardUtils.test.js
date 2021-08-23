import {
  cardImages,
  cardCounts,
  getCardNo,
  shuffle,
  checkCompletedDeck,
  moveCards,
  deal,
  newGame,
  getIndexWhichNextCardsDraggable,
  getOrderedCardListsFromDecks,
  getHint,
} from './cardUtils';

describe('cardUtils', () => {
  HTMLMediaElement.prototype.play = jest.fn();

  describe('Constants', () => {
    it('should return correct card images', () => {
      for (let i = 1; i < 14; i += 1) {
        expect(cardImages[i]).toMatch(new RegExp(`${i}.webp`));
      }
    });

    it('should be 8 of each card no when initial state', () => {
      Object.keys(cardCounts).forEach((cardName) => {
        expect(cardCounts[cardName]).toBe(8);
      });
    });
  });

  describe('getCardNo()', () => {
    it('should return correct card no when given name', () => {
      expect(getCardNo('king')).toBe(13);
    });
  });

  describe('shuffle()', () => {
    it('should return shuffled list', () => {
      const cards = [1, 2, 3, 4, 5, 6, 7, 8];
      expect(shuffle(cards)).not.toEqual(cards);
    });
  });

  describe('checkCompletedDeck()', () => {
    it('should return true if deck containing ordered 1 to 13 cards', () => {
      const cards = [
        3, 5, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 8,
      ];
      expect(checkCompletedDeck(cards)).toBeTruthy();
    });

    it('should return false if deck not containing ordered 1 to 13 cards', () => {
      const cards = [1, 5, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
      expect(checkCompletedDeck(cards)).toBeFalsy();
    });
  });

  describe('moveCards()', () => {
    it('should be drag when moved deck is continue of destination deck', () => {
      const cardDecks = {
        deck1: {
          cards: [7, 13, 11, 13, 12],
          visibleCardCount: 1,
        },
        deck2: {
          cards: [12, 6, 3, 2, 5, 11],
          visibleCardCount: 1,
        },
      };
      const source = {
        index: 4,
        droppableId: 'deck1',
      };
      const destination = {
        index: 6,
        droppableId: 'deck2',
      };

      const result = moveCards(cardDecks, source, destination);

      expect(result.isDragSuccessful).toBeTruthy();
    });

    it('should dont be drag when moved deck is not continue of destination deck', () => {
      const cardDecks = {
        deck1: {
          cards: [7, 13, 11, 13, 11],
          visibleCardCount: 1,
        },
        deck2: {
          cards: [12, 6, 3, 2, 5, 11],
          visibleCardCount: 1,
        },
      };
      const source = {
        index: 4,
        droppableId: 'deck1',
      };
      const destination = {
        index: 6,
        droppableId: 'deck2',
      };

      const result = moveCards(cardDecks, source, destination);

      expect(result.isDragSuccessful).toBeFalsy();
    });
  });

  describe('deal()', () => {
    it('should added one card to decks', () => {
      const cardDecks = {
        deck1: {
          cards: [7, 13, 11, 13, 12],
          visibleCardCount: 1,
        },
        deck2: {
          cards: [12, 6, 3, 2, 5, 11],
          visibleCardCount: 1,
        },
      };

      const dealingCards = [
        [5, 7],
        [1, 8],
      ];

      const newCardDecks = deal(cardDecks, dealingCards);

      Object.keys(newCardDecks[0]).forEach((deckId) => {
        expect(newCardDecks[0]).not.toEqual(cardDecks[deckId]);
      });
    });
  });

  describe('newGame()', () => {
    it('should return initial decks', () => {
      expect(newGame()).not.toBeNull();
    });
  });

  describe('getIndexWhichNextCardsDraggable()', () => {
    it('should return initial decks', () => {
      const deck = {
        cards: [2, 7, 4, 9, 2, 1, 2, 3],
        visibleCardCount: 5,
      };

      expect(getIndexWhichNextCardsDraggable(deck)).toBe(5);
    });
  });

  describe('getOrderedCardListsFromDecks()', () => {
    it('should return ordered cards from decks', () => {
      const cardDecks = {
        deck1: {
          cards: [7, 13, 11, 10, 11, 12],
          visibleCardCount: 6,
        },
        deck2: {
          cards: [12, 6, 3, 2, 5, 6],
          visibleCardCount: 6,
        },
      };

      const orderedCardLists =
        getOrderedCardListsFromDecks(cardDecks);

      expect(orderedCardLists).toEqual([
        {
          cards: [10, 11, 12],
          startingIndex: getIndexWhichNextCardsDraggable(
            cardDecks.deck1
          ),
        },
        {
          cards: [5, 6],
          startingIndex: getIndexWhichNextCardsDraggable(
            cardDecks.deck2
          ),
        },
      ]);
    });
  });

  describe('getHint()', () => {
    it('should return undefined if no hint', () => {
      const cardDecks = {
        deck1: { cards: [3, 4, 2, 1, 13, 6], visibleCardCount: 1 },
        deck2: { cards: [1, 12, 2, 8, 3, 2], visibleCardCount: 1 },
      };

      expect(getHint(cardDecks)).toBeUndefined();
    });
    /* 
    it('should return hints if any', () => {
      const cardDecks = {
        deck1: {
          cards: [7, 9],
          visibleCardCount: 1,
        },
        deck2: {
          cards: [11, 12],
          visibleCardCount: 1,
        },
      };

      expect(getHint(cardDecks)).not.toBeUndefined();
    }); */
  });
});
