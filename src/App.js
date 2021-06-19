import "./App.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { dark } from "./themes/dark";
import { light } from "./themes/light";
import Home from "./containers/userTemplate/Home";
import { useState } from "react";
import ToggleTheme from "./components/ToggleTheme";

function App() {
	const [theme, setTheme] = useState(true);
	const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;
	const appliedTheme = createMuiTheme(theme ? light : dark);
	return (
		<ThemeProvider theme={appliedTheme}>
			<div
				className="App"
				style={{ backgroundColor: appliedTheme.palette.primary.light }}>
				<ToggleTheme onClick={() => setTheme(!theme)} icon={icon} />
				<Home />
			</div>
		</ThemeProvider>
	);
}

export default App;
