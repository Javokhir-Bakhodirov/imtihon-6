import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import apiAxios from "../api/axios";

const useLogin = () => {
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const login = async (values) => {
		setError(null);
		try {
			const response = await apiAxios.post("/user/login", { ...values });
			if (response.status === 200) {
				localStorage.setItem("token", response.data.access_token);
				toast.success("Login was successful");
				navigate("/");
			} else {
				setError(`Login failed with status: ${response.status}`);
			}
		} catch (err) {
			setError(`Login request failed: ${err.message}`);
		}
	};

	return { login, error };
};

export default useLogin;
