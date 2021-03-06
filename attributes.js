'use strict';

module.exports = [
  {
    name: 'health',
    base: 100,
    formula: {
      requires: [],
      fn: function (character, health) {
        return health + (character.level ** 2);
      },
    },
  },
  {
    name: 'mana',
    base: 100,
    formula: {
      requires: ['intellect'],
      fn: function (character, mana, intellect) {
        return mana + (intellect * 10);
      }
    },
  },
  { name: 'energy', base: 100 },
  { name: 'strength', base: 0 },
  { name: 'agility', base: 0 },
  { name: 'intellect', base: 0 },
  { name: 'stamina', base: 0 },
  { name: 'armor', base: 0 },
  { name: 'critical', base: 0 },
  { name: 'favor', base: 10 },
];
