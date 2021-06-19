import { makeStyles, createStyles } from "@material-ui/core";
import { displayDesktop, displayMobile } from "../../styles/reponsive";

const topDown = {
	transform: "translateY(-100%)",
	opacity: 0,
	visibility: "hidden",
	transition: "all 0.8s cubic-bezier(0.77, 0, 0.175, 1)",
};

const topDownActive = {
	transform: "translateY(0)",
	opacity: 1,
	visibility: "visible",
};

const leftRight = {
	transform: "translateX(-100%)",
	opacity: 0,
	visibility: "hidden",
	transition: "all 0.8s cubic-bezier(0.77, 0, 0.175, 1)",
};

const leftRightActive = {
	transform: "translateX(0)",
	opacity: 1,
	visibility: "visible",
};

const rightLeft = {
	transform: "translateX(100%)",
	opacity: 0,
	visibility: "hidden",
	transition: "all 0.8s cubic-bezier(0.77, 0, 0.175, 1)",
};

const rightLeftActive = {
	transform: "translateX(0)",
	opacity: 1,
	visibility: "visible",
};

export const useStyles = makeStyles((theme) =>
	createStyles({
		sliderItem: {
			backgroundColor: theme.palette.primary.main,
			paddingLeft: 15,
			paddingRight: 15,
			"& img": {
				// height: "100%",
				maxHeight: 600,
				objectFit: "contain",
			},
			"& .MuiGrid-root": {
				position: "relative",
			},
		},
		description: {
			paddingLeft: 80,
			paddingRight: 80,
			color: "#fff",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			"& h1": {
				fontSize: "4rem",
				lineHeight: "4rem",
				margin: 0,
				[theme.breakpoints.down("md")]: {
					fontSize: "2rem",
					lineHeight: "2.5rem",
				},
			},
			"& p": {
				color: "#85878c",
				marginTop: "2rem",
				...displayDesktop(theme, "md"),
			},
		},
		btnBuy: {
			width: "50%",
			minWidth: 150,
			height: 40,
			backgroundColor: "#fff",
			borderRadius: 20,
			color: "#000",
			marginTop: "2rem",
			"& span": {
				fontWeight: 700,
			},
			"&:hover": {
				color: "#fff",
			},
		},
		/**
		 * Animation
		 */
		sliderContainer: {
			"& .slick-prev": {
				...leftRight,
				left: 25,
				zIndex: 1,
			},
			"& .slick-next": {
				...rightLeft,
				right: 25,
			},
			"&:hover": {
				"& .slick-prev": leftRightActive,
				"& .slick-next": rightLeftActive,
			},
			"& .slick-active": {
				"& .topDown": topDownActive,
				"& .leftRight": leftRightActive,
				"& .rightLeft": rightLeftActive,
			},
			"& .slick-slide.slick-active": {
				zIndex: 1,
			},
		},
		topDown,
		leftRight,
		rightLeft,
	})
);
