"use client"
import axios from "axios";
import { ChangeEventHandler, useState } from "react";

export function Signup() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSignup = async (e:any) =>{
        try {
            e.preventDefault()
            const response = await axios.post("https://localhost:3001/api/user", {
                name: name,
                email: email,
                password: password
            })
        } catch (err) {
            console.error(err)
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
                {<div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Sign up
                        </div>
                    </div>
                    <form onSubmit={handleSignup}>
                    <div className="pt-2">

                        <LabelledInput onChange={(e) => {
                            setName(e.target.value);
                        }} id="name" label="Name" autoComplete={"name"} placeholder="Your Name here" />

                        <LabelledInput onChange={(e) => {
                            setEmail(e.target.value);
                        }} id="email" label="Email" type="email" autoComplete={"email"} placeholder="example@example.com" />

                        <LabelledInput onChange={(e) => {
                            setPassword(e.target.value)
                        }} id="password" label="Password" autoComplete={"password"} type={"password"} placeholder="********" />

                        <button
                         type="submit" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                            Sign up
                        </button>
                    </div>
                    </form>
                </div>}
        </div>
    </div>

}

function LabelledInput({ id, label, placeholder, type, onChange, autoComplete }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"}
         id={id} autoComplete={autoComplete} 
          className="bg-gray-50 border border-gray-300
           text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500
             block w-full p-2.5" placeholder={placeholder} required />
    </div>
}

interface LabelledInputType {
    id: string;
    label: string;
    placeholder: string;
    type?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    autoComplete: string
}
