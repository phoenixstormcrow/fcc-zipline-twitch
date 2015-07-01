/* pinned.js */

'use strict';

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

function save (obj) {
  localStorage.setItem('pinned', JSON.stringify(obj));
}

export default {
  channels: (function () {
    let stored = localStorage.getItem('pinned');
    if (stored === null) {
      save(seed);
      return seed;
    } else {
      return JSON.parse(stored);
    }
  }()),
  pin (channel) {
    this.channels.push(channel);
    save(this.channels);
  },
  unpin (channel) {
    let i = this.channels.indexOf(channel);
    if (i !== -1) {
      this.channels.splice(i, 1);
      save(this.channels);
    }
  }
};
