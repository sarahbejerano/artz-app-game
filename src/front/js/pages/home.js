import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { LinkButton } from "../component/linkButton";
import { PageButton } from "../component/pageButton";
import { PageHeader } from "../component/header";
import { CollectionCard } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const logout = () => {
		actions.signOut();
	}
	return (
		<div className="homePage">
			<PageHeader />
			<h1 className="pageTitle">A learning platform about art</h1>
			<CollectionCard url="/modernism" title="Modernism" image="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/6/18/1434647790018/d0bb6745-5cbe-4f5a-993d-4c9b25ab86b8-2060x1479.jpeg?width=465&quality=45&auto=format&fit=max&dpr=2&s=446f767582a2c8b288be76dd1113a62a" />
		</div>
	);
};
