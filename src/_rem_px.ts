export function _rem_px(rem = 1) {
	return rem * parseFloat(
		getComputedStyle(
			document.documentElement)
			.fontSize
	)
}
export { _rem_px as _px__rem }