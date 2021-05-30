export function rem_px_(rem = 1) {
	return rem * parseFloat(
		getComputedStyle(
			document.documentElement)
			.fontSize
	)
}
export {
	rem_px_ as _rem_px,
	rem_px_ as _px__rem,
}
