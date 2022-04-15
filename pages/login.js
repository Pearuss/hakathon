import { useEffect, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import LoginComponent from "../components/login";
import ThemeWrapper from "../components/container/themeWrapper";
import adminTheme from "../styles/theme/materialClient";
// import useFetch from '../hooks/use-fetch';

const schema = yup.object().shape({
  email: yup.string().required().email("Please enter a valid email"),
  password: yup.string().min(8).max(20).required(),
});
// const [data, setData] = useState<any>()

const Login = () => {
  //   const { login, profile, firstLoading } = useAuth();
  //   const router = useRouter();

  //   useEffect(() => {
  //     if (!firstLoading && !profile?.data) {
  //       // setIsLogin(false);
  //     } else if (profile?.data) {
  //       router.replace("/");
  //     }
  //   }, [profile, firstLoading]);

  const { handleSubmit, control, formState } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    criteriaMode: "firstError",
    shouldFocusError: false,
    resolver: yupResolver(schema),
  });

  const [errorFormLogin, setErrorFormLogin] = useState("");
  const [isLoadingForm, setIsLoadingForm] = useState(false);

  const submit = async (data, event) => {
    event.preventDefault();

    // try {
    //   setIsLoadingForm(true);
    //   const res = await login(data);
    //   setIsLoadingForm(false);

    //   if (res.message === 422) {
    //     setErrorFormLogin("Email or password is incorrect!");
    //     return;
    //   }
    //   if (res.message === 500) {
    //     setErrorFormLogin("Server error!");
    //     return;
    //   }
    //   router.push("/");
    // } catch (error) {
    //   console.log(error);
    //   setErrorFormLogin("Server not response");
    // }
  };

  return (
    <ThemeWrapper theme={adminTheme}>
      <LoginComponent
        submit={submit}
        handleSubmit={handleSubmit}
        // handleLoginSSO={handleLoginSSO}
        control={control}
        formState={formState}
        errorForm={errorFormLogin}
        isLoading={isLoadingForm}
      />
    </ThemeWrapper>
  );
};

export default Login;
