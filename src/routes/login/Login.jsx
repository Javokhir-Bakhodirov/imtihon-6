import React from "react";
import Container from "../../components/container/Container";
import { useTranslation } from "react-i18next";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import "./Login.css";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const { t } = useTranslation();
	const { login, error } = useLogin();

	const onFinish = (values) => {
		console.log("Success:", values);
		login(values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<section className="login">
			<Container>
				<div className="login__wrapper flex flex-col items-center justify-center mt-[150px]">
					<div className="login__text-wrapper">
						<h1 className="login__title mb-[5px] text-center">{t("hi")}</h1>
						<p className="login__text text-center">
							{t("Sign in to eBay or")}{" "}
							<Link to="/" className="text-blue-600 underline">
								{t("create an account")}
							</Link>{" "}
						</p>
					</div>
					<div className="login_form mt-[39px]">
						<Form
							className=""
							name="basic"
							labelCol={{
								span: 8,
							}}
							wrapperCol={{
								span: 16,
							}}
							style={{
								maxWidth: 600,
							}}
							initialValues={{
								remember: true,
							}}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							autoComplete="off"
						>
							<Form.Item
								className="w-full"
								name="username"
								rules={[
									{
										required: true,
										message: `${t("Please input your username!")}`,
									},
								]}
							>
								<Input
									placeholder={t("Username")}
									className="w-[320px] py-[9px]"
								/>
							</Form.Item>

							<Form.Item
								name="password"
								rules={[
									{
										required: true,
										message: `${t("Please input your password!")}`,
									},
								]}
							>
								<Input.Password
									placeholder={t("Password")}
									className="w-[320px] py-[9px]"
								/>
							</Form.Item>

							{error && (
								<div className="error-message text-red-500 text-center mb-3">
									{error}
								</div>
							)}

							<Form.Item
								wrapperCol={{
									offset: 8,
									span: 16,
								}}
							>
								<Button
									className="w-[320px] py-[12px] ml-[-105px] rounded-[27px] h-[48px]"
									type="primary"
									htmlType="submit"
								>
									Continue
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Login;
