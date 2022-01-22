import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { LinkButton } from "../component/linkButton";
import { PageButton } from "../component/pageButton";
import { PageHeader } from "../component/header";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const logout = () => {
		actions.signOut();
	}
	return (
		<div className="homePage">
			<PageHeader />
			<h1>A learning platform about art</h1>
		</div>
	);
};
