import React from "react";
import MainContainer from "./components/MainContainer";
import Router from "./routes";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
	return (
		<MainContainer>
			<GlobalStyle/>
			<Router/>
		</MainContainer>
	)
}

export default App;
