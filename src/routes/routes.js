import App from "../App";
import Root from "../Root";
import ErrorPage from "../components/ErrorPage";
import Counter from "../pages/counter/Counter";
import Users from "../pages/users/UserList";
import ViewUser from "../pages/users/ViewUser";

export const routesList = [
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		title: "home",
		children: [
			{
				path: "/",
				element: <App />,
				title: "counter",
				show: true,
			},
			{
				path: "/users",
				element: <Users />,
				title: "users",
				show: true,
			},
			{
				path: "/users/:id",
				element: <ViewUser />,
				title: "users",
				show: false,
			},
		],
	},
];
