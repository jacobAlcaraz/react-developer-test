import axios from "axios";

// const server_url = "https://dummyapi.io/data/v1/";
const server_url = "https://jsonplaceholder.org/";

export default axios.create({
	baseURL: server_url,
});
