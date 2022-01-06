import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { LinkButton } from "../component/linkButton";
import WelcomeAnimation from "../component/welcomeAnimation";
import { Title } from "../component/title";
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="homeBody">
			<Title></Title>
			<WelcomeAnimation className="welcomeAnimation" />
			<div className="buttonContainer">
				<LinkButton text="Create Profile" variant="secondary" link="/createprofile" />
			</div>
			<div className="buttonContainer last">
				<LinkButton text="Sign In" variant="primary" link="/signin" />
			</div>
		</div>
	);
};
