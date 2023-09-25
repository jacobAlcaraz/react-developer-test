import { useParams } from "react-router-dom";
import axios from "axios";

import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import ErrorFetch from "../../components/ErrorFetch";

const ViewUser = () => {
	const { id: selectedId } = useParams();

	const viewCurrentUser = async () => {
		const { data } = await axios.get(
			`https://jsonplaceholder.org/users/${selectedId}`
		);
		return data;
	};

	const { data, isLoading, isError, isFetching } = useQuery({
		queryKey: "jsonPlaceholderViewUser",
		queryFn: viewCurrentUser,
		retry: 0,
		staleTime: 5000,
	});

	const {
		firstname,
		lastname,
		phone,
		email,
		birthDate,
		address,
		company,
		website,
	} = data || {};
	const { street, city, zipcode } = address || {};
	if (isLoading || isFetching) return <Loading />;
	if (isError)
		return (
			<div>
				<ErrorFetch />
			</div>
		);

	return (
		<>
			<div>
				<div className="h-[100%] px-4">
					<div className="container mx-auto p-4">
						<div className="bg-white rounded-lg shadow-lg p-6">
							<h1 className="text-2xl font-semibold mb-4">
								{firstname} {lastname}
							</h1>
							<div className="flex flex-col md:flex-row">
								<div className="md:w-1/2">
									<div className="mb-4">
										<h2 className="text-lg font-semibold">
											Contact Information
										</h2>
										<p>Email: {email}</p>
										<p>Phone: {phone}</p>
									</div>
									<div className="mb-4">
										<h2 className="text-lg font-semibold">Address</h2>
										<p>Street: {address?.street}</p>
										<p>Suite: {address.suite}</p>
										<p>City: {address.city}</p>
										<p>Zipcode: {address.zipcode}</p>
									</div>
								</div>
								<div className="md:w-1/2">
									<div className="mb-4">
										<h2 className="text-lg font-semibold">Company</h2>
										<p>Name: {company.name}</p>
										<p>Catch Phrase: {company.catchPhrase}</p>
										<p>Business: {company.bs}</p>
									</div>
									<div className="mb-4">
										<h2 className="text-lg font-semibold">Other Information</h2>
										<p>Birth Date: {birthDate}</p>
										<p>Website: {website}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ViewUser;
