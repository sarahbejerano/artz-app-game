import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PageHeader } from "../component/header";
import "../../styles/home.scss";

export const Home = () => {
	const { actions } = useContext(Context);
	const logout = () => {
		actions.signOut();
	}
	return (
		<div className="homePage">
			<PageHeader />
			<h1 className="pageTitle">A learning platform about art
			</h1>

		</div>
	);
};
