import { makeStyles, createStyles } from "@material-ui/core/styles";
import { displayDesktop, displayMobile } from "../../../../styles/reponsive";

const useStyles = makeStyles((theme) =>
	createStyles({
		grow: {
			flexGrow: 1,
		},
		title: {
			cursor: "pointer",
		},
		menuButton: {
			...displayMobile(theme, "md"),
			marginRight: theme.spacing(2),
			color: theme.palette.secondary.light,
		},
		sectionDesktop: displayDesktop(theme, "md"),
		sectionMobile: displayMobile(theme, "md"),
		listItem: {
			display: "flex",
			"& .MuiListItem-root": {
				width: "auto !important",
			},
		},
		navItemText: {
			flex: "0 0 auto",
		},
		appBar: {
			backgroundColor: theme.palette.primary.dark,
			transition: "all .5s ease",
			"&.top": {
				backgroundColor: "transparent",
				paddingTop: 10,
				paddingBottom: 10,
			},
		},
		toolBar: {
			justifyContent: "space-between",
		},
		navLeft: {},
		navCenter: displayDesktop(theme, "md"),
		navRight: {
			"& .sectionDesktop": displayDesktop(theme, "md"),
			"& .sectionMobile": displayMobile(theme, "md"),
		},
	})
);

export default useStyles;
