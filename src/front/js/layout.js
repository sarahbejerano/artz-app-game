import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { Home } from "./pages/home";
import { CollectionPage } from "./pages/collection";
import { CollectionForPeriod } from "./component/collectionDetail";
import { InfoArtwork } from "./pages/moreInfoArtwork";
import { QuestionPage } from "./pages/question";
import { Login } from "./pages/login";

import { CreateProfile } from "./pages/createProfile";
// import { UserProfile } from "./pages/userprofile";

import "../styles/layout.scss";

const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<>
			< BrowserRouter basename={basename} >
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/game">
							<QuestionPage />
						</Route>

						<Route exact path="/createprofile">
							<CreateProfile />
						</Route>

						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/collection">
							<CollectionPage />
						</Route>
						<Route path="/detail/:style">
							<CollectionForPeriod />
						</Route>
						<Route path="/artwork/:style/:id">
							<InfoArtwork />
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter >
		</>
	);
};

export default injectContext(Layout);
