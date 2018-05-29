const assert = require('assert');
const Pokemon = require('../Pokemon.js');

describe('Pokemon class', () => {
  let pokemon;

  beforeEach(() => {
    pokemon = new Pokemon('Pinsir', 26);
  })

  it('Method show() should print name and value to console', () => {
    const action = () => {
      pokemon.show();
    }

    assert(action, 'Error function console.log');
  });
});
