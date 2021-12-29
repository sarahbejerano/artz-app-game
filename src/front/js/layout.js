import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { LinkButton } from "./component/linkButton";
import { PageButton } from "./component/pageButton";
import { Title } from "./component/title";


const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div className="container-lg">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Title />
					<LinkButton text="text" link="link" variant="secondary" />
					<PageButton text="text" callback={() => { console.log("text") }} />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
