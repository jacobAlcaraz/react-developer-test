import Swal from "sweetalert2";
import axios from "axios";
import server from "./server";

const Toast = Swal.mixin({
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timer: 2000,
	timerProgressBar: false,
});

const errorAlert = (message) => {
	return Toast.fire({
		icon: "error",
		title: message,
		timer: 2000,
	});
};

const auth = () => {
	return {
		headers: {
			"Content-Type": "application/json",
			// authorization: `Bearer ${localStorage.getItem("token")}`,
			"app-id": "65080fec01538513690ca63e",
		},
	};
};

export const GET = async (routeName) => {
	return server
		.get(routeName, auth())
		.then((response) => {
			return response;
		})
		.catch((err) => {
			const message = !err.message ? "Server Maintenance!" : err.message;
			errorAlert(message);
			const response = {
				...err?.response,
			};
		});
};
