/* tests for pinned.js */

var test = require('tape');


const seed = [
  'freecodecamp',
  'storbeck',
  'terakilobyte',
  'habathcx',
  'RobotCaleb',
  'comster404',
  'brunofin',
  'thomasballinger',
  'noobs2ninjas',
  'beohoff'
];

function getStored() {
  return JSON.parse(localStorage.getItem('pinned'));
}

test('pinned tests', function (t) {
  localStorage.clear();
  var pinned = require('../src/client/pinned');

  t.deepEqual(seed, getStored(), 'localStorage populated');

  t.equal(getStored().indexOf('fooBar'), -1, 'fooBar not pinned');
  pinned.pin('fooBar');
  t.notEqual(getStored().indexOf('fooBar'), -1, 'fooBar was pinned');
  pinned.unpin('fooBar');
  t.equal(getStored().indexOf('fooBar'), -1, 'fooBar was unpinned');

  t.end();
});
