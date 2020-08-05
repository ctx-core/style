"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._rem__px = exports._px__rem = void 0;
function _px__rem(rem = 1) {
    return rem * parseFloat(getComputedStyle(document.documentElement)
        .fontSize);
}
exports._px__rem = _px__rem;
function _rem__px(px = 16) {
    return px / _px__rem(1);
}
exports._rem__px = _rem__px;
