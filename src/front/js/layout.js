import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { QuestionPage } from "./pages/question";
import { IntroText } from "./pages/introText";
import { CreateProfile } from "./pages/createProfile";
import { MuseumMap } from "./pages/map";
import { SignIn } from "./pages/signIn";
import { UserProfile } from "./pages/userprofile";


const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div className="container-flex appContainer">
			< BrowserRouter basename={basename} >
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/question">
							<QuestionPage />
						</Route>
						<Route exact path="/intro">
							<IntroText />
						</Route>
						<Route exact path="/createprofile">
							<CreateProfile />
						</Route>
						<Route exact path="/userprofile">
							<UserProfile />
						</Route>
						<Route exact path="/signin">
							<SignIn />
						</Route>
						<Route exact path="/map">
							<MuseumMap />
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter >
		</div >
	);
};

export default injectContext(Layout);
