import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Title } from "./component/title";
import { QuestionPage } from "./pages/question";
import { CreateProfile } from "./pages/createProfile";




const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div className="container-flex appContainer">
			< BrowserRouter basename={basename} >
				<ScrollToTop>
					<Title />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/question">
							<QuestionPage />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/createprofile">
							<CreateProfile />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter >
		</div >
	);
};

export default injectContext(Layout);
