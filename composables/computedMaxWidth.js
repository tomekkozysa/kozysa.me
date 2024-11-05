export default function computedMaxWidth(width) {
	const default_max_width =  "max-w-6xl"
	return computed(() => {
		/* could/should be?:
		- full
		- xl
		- lg
		- md
		- sm
		*/
		if (width == "full") {
			return "max-w-full";
		} else if (width == "narrow") {
			return "max-w-3xl";
		} else if (width == "wide") {
			return "max-w-8xl";
		} else if (width == "fit") {
			return "w-fit";		
		} else if (width == "auto") {
			return "";
		} 
		else if (width == "default") {
			return default_max_width;
		} 
		return default_max_width;
	});
}
