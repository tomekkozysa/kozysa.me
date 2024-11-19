export default function computedMaxWidth(width) {
	const default_max_width =  "max-w"
	return computed(() => {
		/* could/should be?:
		- full
		- xl
		- lg
		- md
		- sm
		*/
		if (width == "full") {
			return "max-full";
		} else if (width == "narrow") {
			return "max-narrow";
		} else if (width == "wide") {
			return "max-wide";
		} else if (width == "fit") {
			return "max-fit";		
		} else if (width == "auto") {
			return "";
		} 
		else if (width == "default") {
			return "max-w";
		} 
		return default_max_width;
	});
}
