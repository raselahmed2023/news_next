"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

const RegisterPage = () => {

    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;



        if (!image || !name || !email || !password) {
            setErr("All fields are required");
            return;
        }

        if (password.length < 8) {
            setErr('Password must be at least 8 characters');
            return;
        }

        setLoading(true)

        const { data, error } = await authClient.signUp.email({
            email,
            password,
            name,
            image
        });
        if (error) {
            setErr(error.message || "Registration failed");
            setLoading(false);
            return;
        }


        setLoading(false);
        alert("Registration successful");

    };

    return (


        <div className="min-h-screen bg-base-200 flex items-center justify-center">
            <div className="card bg-base-100 w-full max-w-lg shadow-lg rounded-2xl">
                <div className="card-body px-10 py-10">
                    <h2 className="text-center text-3xl font-bold mb-4">Sign Up</h2>
                    {
                        err && (<p className="text-error text-center text-sm mb-2">{err}</p>)
                    }
                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium">Name <span className="text-error">*</span></span>
                            </label>
                            <input name="name" type="text" required placeholder="Enter your name" className="input input-bordered w-full rounded-xl" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium">Image URL <span className="text-error">*</span></span>
                            </label>
                            <input name="image" type="text" required placeholder="https://example.com/photo.jpg" className="input input-bordered w-full rounded-xl" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium">Email <span className="text-error">*</span></span>
                            </label>
                            <input name="email" type="email" required placeholder="john@example.com" className="input input-bordered w-full rounded-xl" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium">Password <span className="text-error">*</span></span>
                            </label>
                            <input name="password" type="password" required minLength={8} placeholder="Enter your password" className="input input-bordered w-full rounded-xl" />
                            <label className="label pt-1">
                                <span className="label-text-alt text-base-content/50">At least 8 characters</span>
                            </label>
                        </div>

                        <div className="flex gap-3 mt-2">
                            <button type="submit" disabled={loading} className="btn btn-primary rounded-full px-6">
                                {loading ? "Creating..." : "Submit"}
                            </button>
                            <button type="reset" className="btn btn-ghost border border-base-300 rounded-full px-6">Reset</button>
                        </div>
                    </form>

                    <div className="text-center mt-4">
                        <span className="text-sm">Already have an account? </span>
                        <Link href="/login" className="link link-primary text-sm">Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;