import auth from "../Register/Auth.module.scss";

import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

import axios from "axios";
import { useToast } from "@chakra-ui/react";

import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

interface infoData {
  email: string;
  password: string;
  id: string;
  fine: any;
}

const Form = () => {
  const router = useRouter();
  const toast = useToast();

  const { pathname } = useRouter();

  const {
    register,
    getValues,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const registerUser = (data: any) => {
    console.log(data);

    axios
      .post("https://akan2002.pythonanywhere.com/api/auth/register/", {
        ...data, 
      })
      .then((res) => {
        toast({
          title: "Account created",
          description: "We've created your account for you.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-left",
        });

        localStorage.setItem(
          "userInfo",
          JSON.stringify(res.data)
        );

        reset();

        router.push("/login");
      })
      .catch((err) => {
        toast({
          title: "Something went to bad",
          description: err.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-left",
        });
      });
  };

  const loginUser = (data: any) => {
    axios
      .post("https://akan2002.pythonanywhere.com/api/auth/login/", { ...data })
      .then((res) => {
        toast({
          title: "Account sign in",
          description: "Success",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-left",
        });

        localStorage.setItem(
          "token",
          JSON.stringify(res.data)
        );

        reset();

        router.push("/");
        console.log(res.data);
      })
      .catch((err) => {
        toast({
          title: "Something went to bad",
          description: err.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-left",
        });
      });
  };

  const submit = (data: any) => {
    // data = {...data, position: Number(data.position)}
    data = {...data, position: null}
    pathname === "/register" ? registerUser(data) : loginUser(data);
  };

  return (
    <>
      <form className={auth.form} noValidate onSubmit={handleSubmit(submit)}>
        <div className={auth.form__left}>
          <span className={auth.form__left_circle}>
            {pathname === "/register" ? (
              <AiOutlineUserAdd className={auth.form__left_user} />
            ) : (
              <AiOutlineUser className={auth.form__left_user} />
            )}
          </span>
          <p className={auth.form__left_subtitle}>
            {pathname === "/register" ? "Sign up" : "Sign in"}
          </p>
        </div>

        <div className={auth.form__right}>
          <div className={auth.form__right_content}>
            <label
              className={auth.form__right_label}
              style={{
                border: errors.username ? "1px solid red" : "1px solid #6d95fc",
              }}
            >
              <input
                type="text"
                {...register("username", {
                  required: {
                    message: "required field",
                    value: true,
                  },
                })}
                className={auth.form__right_input}
                placeholder="Username"
              />
            </label>

            {pathname === "/register" ? (
              <label
                className={auth.form__right_label}
                style={{
                  border: errors.first_name
                    ? "1px solid red"
                    : "1px solid #6d95fc",
                }}
              >
                <input
                  type="text"
                  {...register("first_name", {
                    required: {
                      message: "required field",
                      value: true,
                    },
                  })}
                  className={auth.form__right_input}
                  placeholder="First name"
                />
              </label>
            ) : (
              ""
            )}

            {pathname === "/register" ? (
              <label
                className={auth.form__right_label}
                style={{
                  border: errors.last_name
                    ? "1px solid red"
                    : "1px solid #6d95fc",
                }}
              >
                <input
                  type="text"
                  {...register("last_name", {
                    required: {
                      message: "required field",
                      value: true,
                    },
                  })}
                  className={auth.form__right_input}
                  placeholder="Last name"
                />
              </label>
            ) : (
              ""
            )}

            {pathname === "/register" ? (
              <label className={auth.form__right_label}>
                <select
                  {...register("position", {
                    required: {
                      message: "required field",
                      value: true,
                    },
                  })}
                  className={auth.form__right_input}
                >
                  <option value="1" className={auth.form__right_option}>
                    Frontend
                  </option>
                  <option value="2" className={auth.form__right_option}>
                    Backend
                  </option>
                  <option value="3" className={auth.form__right_option}>
                    UI/UX
                  </option>
                </select>
              </label>
            ) : (
              ""
            )}

            <label
              className={auth.form__right_label}
              style={{
                border: errors.password ? "1px solid red" : "1px solid #6d95fc",
              }}
            >
              <input
                type="text"
                {...register("password", {
                  required: {
                    message: "required field",
                    value: true,
                  },
                })}
                className={auth.form__right_input}
                placeholder="Password"
              />
            </label>

            {pathname === "/register" ? (
              <label className={auth.form__right_label} style={{
                border: errors.confirm ? "1px solid red" : "1px solid #6d95fc",
              }}>
                <input
                  type="password"
                  className={auth.form__right_input}
                  placeholder="confirm"
                  {...register("password_confirm", {
                    required: {
                      message: "Confirm your password",
                      value: true,
                    },
                    validate: (v) => {
                      if (getValues("password") !== v) {
                        return "Is not a same";
                      }
                    },
                  })}
                />
              </label>
            ) : (
              ""
            )}

            <div className={auth.form__box}>
              <button className={auth.form__box_btn} type="submit">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className={auth.auth__link}>
        <Link
          href={"/register"}
          style={
            pathname === "/register"
              ? { border: "3px solid #6d95fc" }
              : undefined
          }
          className={auth.auth__link_btn}
        >
          Register
        </Link>
        <Link
          href={"/login"}
          style={
            pathname === "/login" ? { border: "3px solid #6d95fc" } : undefined
          }
          className={auth.auth__link_btn}
        >
          Login
        </Link>
      </div>
    </>
  );
};

export default Form;
