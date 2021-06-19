export const displayDesktop = (theme, brkPoint) => {
	return {
		display: "none",
		[theme.breakpoints.up(brkPoint)]: {
			display: "block",
		},
	};
};

export const displayMobile = (theme, brkPoint) => {
	return {
		display: "flex",
		[theme.breakpoints.up(brkPoint)]: {
			display: "none",
		},
	};
};
