const assert = require('assert');
const expect = require('chai').expect;
const Pokemon = require('../Pokemon.js');
const PokemonList = require('../PokemonList.js');

describe('PokemonList class', () => {
  let pokemons;

  beforeEach(() => {
    pokemons = new PokemonList();
  })

  it('Method add() should add new pokemon in pokemont list', () => {
    pokemons.add('Pinsir', 26);

    expect([{ name: 'Pinsir', level: 26 }]).deep.equal(pokemons);
  });

  it('Method show() should print name and value of all pokemons to console', () => {
    const action = () => {
      pokemons.show();
    }

    assert(action, 'Error function console.log');
  });

  it('Method max() should returns Pokemon with highest level', () => {
    let tests = [
      { name: 'Pinsir', level: 26 },
      { name: 'Pinsir2', level: 50 },
      { name: 'Pinsir3', level: 150 }
    ];

    tests.forEach(({ name, level }) => {
      pokemons.add(name, level);
    });

    expect({ name: 'Pinsir3', level: 150 }).deep.equal(pokemons.max());
  });
});
