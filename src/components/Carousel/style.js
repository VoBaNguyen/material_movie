import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
	carouselList: {
		marginRight: -10,
		marginLeft: -10,
		"& .slick-list": {
			paddingTop: 10,
		},
		"& .slick-slide": {
			paddingLeft: "10px",
			paddingRight: "10px",
			boxSizing: "border-box",
		},
		"& .slick-prev": {
			left: 0,
			zIndex: 1,
		},
		"& .slick-next": {
			right: 0,
		},
	},
	carouselItem: {
		padding: 0,
		transition: "all .4s ease",
		"&:hover": {
			transform: "translate(0, -5px)",
		},
	},
});
