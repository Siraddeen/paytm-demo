import React, { useState } from "react";
import axios from "axios";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/Subheading";
import { Button } from "../components/Button";
import BottomWarning from "../components/BottomWarning";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className=" flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create account"} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder={"Rock"}
            label={"first Name"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder={"Lee"}
            label={"last Name"}
          />
          <InputBox
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder={"ads@l.com"}
            label={"Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder={"123212"}
            label={"Password"}
          />

          <div className="pt-4">
            <Button
              onClick={async () => {
                const res = await axios.post(
                  "http://localhost:3000/api/v1/user/signup",
                  {
                    body: {
                      userName: userName,
                      firstName: firstName,
                      lastName: lastName,
                      password: lastName,
                    },
                  }
                );
                localStorage.setItem("token", res.data.token);
              }}
              label={"Sign-up"}
            />
          </div>
          <BottomWarning
            label={"already a user? "}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
