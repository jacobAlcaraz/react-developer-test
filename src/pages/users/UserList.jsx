import { useQuery } from "react-query";
import { GET } from "../../services/api";
import axios from "axios";
import { useJsonPlaceHolderUserListStore } from "../../zustand/jsonPlaceholderUserList";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

const UserList = () => {
	const { jsonPlaceHolderUserList, setjsonPlaceHolderUserList } =
		useJsonPlaceHolderUserListStore((state) => state);

	const getUserList = async () => {
		const { data, status } = await GET("/users");
		if (status === 200) {
			setjsonPlaceHolderUserList(data);
		}
		return data;
	};

	const { isLoading, isError, isFetching } = useQuery({
		queryKey: "jsonPlaceholderUserList",
		queryFn: getUserList,
		retry: 0,
		staleTime: 5000,
	});

	if (isLoading || isFetching) return <Loading />;
	if (isError) return <div>Error...</div>;

	const userListLayout = (state) => {
		return (
			<div className="grid gap-2 grid-cols-5">
				{jsonPlaceHolderUserList.map((user) => {
					const { id, email, firstname, lastname } = user || {};
					const fullName = `${firstname} ${lastname}`;
					return (
						<Link
							to={`/users/${id}`}
							key={user.id}
							className="btn bg-secondary p-5 border"
						>
							<div>{fullName}</div>
							<div>{email}</div>
						</Link>
					);
				})}
			</div>
		);
	};

	return (
		<>
			<div className="h-[100%] px-4 pt-20">{userListLayout()}</div>
		</>
	);
};

export default UserList;
