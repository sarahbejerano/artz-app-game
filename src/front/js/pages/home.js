import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { LinkButton } from "../component/linkButton";
import { PageButton } from "../component/pageButton";
import WelcomeAnimation from "../component/welcomeAnimation";
import { Title } from "../component/title";
export const Home = () => {
	const { store, actions } = useContext(Context);
	const logout = () => {
		actions.signOut();
	}
	return (
		// <div className="pageHeader">
		// 	Header
		// </div>
		<div className="homeBody">
			<Title></Title>
			<WelcomeAnimation className="welcomeAnimation" />
			{!store.user ?
				(
					<>
						<div className="buttonContainer">
							<LinkButton text="Create Profile" variant="secondary" link="/createprofile" />
						</div>
						<div className="buttonContainer last">
							<LinkButton text="Sign In" variant="primary" link="/signin" />
						</div>
					</>
				) : (
					<>
						<div className="buttonContainer last">
							<LinkButton text="Start" variant="primary" link="/intro" />
						</div>
						<div className="buttonContainer last">
							<PageButton text="Sign Out" variant="secondary" callback={logout} />
						</div>
					</>
				)
			}
		</div>
	);
};
