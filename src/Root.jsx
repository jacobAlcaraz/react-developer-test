import { Link, Outlet, useLocation } from "react-router-dom";
import { routesList } from "./routes/routes";
import { useQueries } from "react-query";
import { GET } from "./services/api";
import { useDummyApiUserListStore } from "./zustand/dummyApiUserList";
import Loading from "./components/Loading";
import ErrorFetch from "./components/ErrorFetch";
import { useJsonPlaceHolderUserListStore } from "./zustand/jsonPlaceholderUserList";

export default function Root() {
	//global states and functions
	const { setDummyApiUserStore } = useDummyApiUserListStore((state) => state);
	const { setjsonPlaceHolderUserList } = useJsonPlaceHolderUserListStore(
		(state) => state
	);

	const getUserListJsonPlaceHolder = async () => {
		const { data, status } = await GET("/users");
		if (status === 200) {
			setjsonPlaceHolderUserList(data);
		}
		return data;
	};
	const getUserListDummyApi = async () => {
		const { data, status } = await GET("/users");
		if (status === 200) {
			setDummyApiUserStore(data);
		}
		return data;
	};

	const queries = useQueries([
		{
			queryKey: "getUserListJsonPlaceHolder",
			queryFn: () => getUserListJsonPlaceHolder(),
			retry: 0,
			staleTime: 3000,
		},
		{
			queryKey: "getUserListDummyApi",
			queryFn: () => getUserListDummyApi(),
			retry: 0,
			staleTime: 3000,
		},
	]);

	if (
		queries.some((query) => {
			return query.isLoading;
		})
	) {
		return <Loading />;
	}

	if (queries.some((query) => query.isError)) {
		return <ErrorFetch />;
	}

	return (
		<>
			<div className="md:grid grid-cols-10 min-h-screen min-w-screen">
				<div className="bg-blue-100 md:col-span-1">
					<Sidebar />
				</div>
				<div className="md:col-span-9">
					<Outlet />
				</div>
			</div>
		</>
	);
}

const Sidebar = () => {
	const { pathname } = useLocation();
	return (
		<>
			{routesList[0].children.map(({ path, title, show }) => {
				return (
					<>
						{show && (
							<Link
								to={path}
								key={path}
								className={`${
									pathname === path ? "bg-active" : "hover:scale-105"
								} flex flex-row  gap-2 transition-all  font-medium p-4 capitalize`}
							>
								<div>{title}</div>
							</Link>
						)}
					</>
				);
			})}
		</>
	);
};
