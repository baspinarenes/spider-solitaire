import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from '../Card/index';
import { getIndexWhichNextCardsDraggable } from '../../../utils/cardUtils';
import * as Styled from './styles';

const Deck = (props) => {
  const { deckNo, deck } = props;

  let indexWhichNextCardsDraggable;

  if ('cards' in deck) {
    indexWhichNextCardsDraggable =
      getIndexWhichNextCardsDraggable(deck);
  }

  return (
    'cards' in deck && (
      <Droppable droppableId={`deck${deckNo}`}>
        {(provided) => (
          <Styled.Deck
            ref={provided.innerRef}
            {...provided.droppableProps}
            deckLength={deck.cards.length}
          >
            <Styled.Placeholder>
              <svg viewBox="0 0 71 96" />
            </Styled.Placeholder>
            {deck.cards.map((value, index) => {
              return (
                <Card
                  key={`deck${deckNo}${index}`}
                  index={index}
                  deckNo={deckNo}
                  cardNo={value}
                  isClose={
                    index < deck.cards.length - deck.visibleCardCount
                  }
                  isDragDisabled={
                    index < indexWhichNextCardsDraggable
                  }
                />
              );
            })}
            {provided.placeholder}
          </Styled.Deck>
        )}
      </Droppable>
    )
  );
};

function arraysEqual(a, b) {
  if (a === b) return false;
  if (a == null || b == null) return true;
  if (a.length !== b.length) return true;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) return true;
  }
  return false;
}

export default React.memo(Deck, arraysEqual);
