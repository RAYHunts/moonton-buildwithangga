import React, { useEffect } from 'react';
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import Label from "@/Components/Label";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    } ,[]);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };




    return (
        <>
            <Head title="Login" />
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/assets/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/assets/images/moonton-white.svg" alt=""/>
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Welcome Back
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get 
                                <br/>
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label
                                        forInput="email"
                                        value="Email Address"
                                    />
                                    <Input 
                                        type={'email'} 
                                        name={'email'} 
                                        placeholder={'Enter Email Address'} 
                                        id={'email'} 
                                        value={data.email}
                                        handleChange={onHandleChange}
                                        required
                                        variant={ errors.email && 'error' }
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div>
                                    <Label
                                        forInput="password"
                                        value="Password"
                                    />
                                    <Input 
                                        type={'password'} 
                                        name={'password'} 
                                        placeholder={'Enter Password'} 
                                        id={'password'} 
                                        value={data.password}
                                        handleChange={onHandleChange}
                                        required
                                        />

                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button processing={processing}>
                                    <span className="text-base font-semibold">
                                        Start Watching
                                    </span>
                                </Button>
                                <Link href={route('register')}>
                                    <Button type="button" variant="light-outline">
                                        <span className="text-base text-white">
                                            Create New Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}