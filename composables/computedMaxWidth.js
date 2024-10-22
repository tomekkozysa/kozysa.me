export default function computedMaxWidth(width) {
	return computed(() => {
		if (width == "full") {
			return "max-w-full";
		} else if (width == "narrow") {
			return "max-w-3xl";
		} else if (width == "wide") {
			return "max-w-8xl";
		} else if (width == "auto") {
			return "";
		} 
		return "max-w-6xl";
	});
}
