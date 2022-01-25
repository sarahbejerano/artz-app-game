import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { Home } from "./pages/home";
import { CollectionPage } from "./pages/collection";
import { CollectionDetail } from "./component/collectionDetail";

// import { QuestionPage } from "./pages/question";
// import { CreateProfile } from "./pages/createProfile";
// import { SignIn } from "./pages/signIn";
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
						{/* <Route exact path="/question">
							<QuestionPage />
						</Route>
						<Route exact path="/createprofile">
							<CreateProfile />
						</Route>
						<Route exact path="/signin">
							<SignIn />
						</Route> */}
						<Route exact path="/collection">
							<CollectionPage />
						</Route>
						<Route path="/detail/:style">
							<CollectionDetail />
						</Route>
						{/* <Route exact path="/userprofile">
							<UserProfile />
						</Route> */}
					</Switch>
				</ScrollToTop>
			</BrowserRouter >
		</>
	);
};

export default injectContext(Layout);
