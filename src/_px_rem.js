import { _rem_px } from './_rem_px';
export function _px_rem(px = 16) {
    return px / _rem_px(1);
}
