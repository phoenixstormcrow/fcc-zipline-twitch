'use strict';

import pinned from './pinned';

console.log(pinned);

global.pin = pinned.pin.bind(pinned);
global.unpin = pinned.unpin.bind(pinned);
