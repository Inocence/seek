import AuthLayout from "../../components/layout/AuthLayout";

const Login = () => {
    return (
        <AuthLayout>
            <div className="flex justify-center">
                <div className="w-full md:max-w-3xl">
                    <div>
                        <a href="">Are you an employer?</a>
                        <form className="">
                            <div>
                                <p className="">Sign in</p>
                                <p className="">Email address</p>
                                <input type="text" />
                                <p>Required field</p>
                            </div>
                            <div>
                                <p>
                                    <span>Password</span>
                                    <a href=""> Forgot password?</a>
                                </p>
                                <input type="text" />
                                <p>Required field</p>
                            </div>
                            <button>Sign in</button>
                        </form>
                    </div>
                    <div>or</div>
                    <div>
                        <button>Continue with Google</button>
                        <button>Continue with Facebook</button>
                        <button>Continue with Apple</button>
                    </div>
                    <p>Dont't have an account ? <a href="">Register</a></p>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Login;