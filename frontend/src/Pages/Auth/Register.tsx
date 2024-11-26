import { Link } from "react-router-dom";
import CommonButton from "../../Components/Common/CommonButton";
import CommonInput from "../../Components/Common/CommonInput";
import AuthLayout from "../../Components/Layout/AuthLayout";

const Register = () => {
    return (
        <AuthLayout>
            <div className="flex justify-center text-lg md:pb-16">
                <div className="w-full md:max-w-2xl">
                    <div className="hidden md:flex justify-end m-2 px-2">
                        <Link to="" className="underline">Are you an employer?</Link>
                    </div>
                    <div className="border-2 border-transparent md:border-gray-300 rounded-xl px-0 md:p-12">
                        <div>
                            <form className="flex flex-col space-y-4">
                                <p className="text-4xl">Register</p>
                                <div className="flex flex-col space-y-2">
                                    <p className="">Email address</p>
                                    <CommonInput name={'email'} />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <p>
                                        <span>Password</span>
                                    </p>
                                    <CommonInput name={'password'} />
                                </div>
                                <CommonButton onClick={e => { }} variant={'pinkBackground'} size="large" className="my-4">Register</CommonButton>
                            </form>
                        </div>
                        <div className="mb-4 flex items-center">
                            <hr className="flex-grow border-t-2 border-gray-200" />
                            <span className="px-4">or</span>
                            <hr className="flex-grow border-t-2 border-gray-200" />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <CommonButton variant={'blackBorder'} icon={'google'}>Continue with Google</CommonButton>
                            <CommonButton variant={'blackBorder'} icon={'facebook'}>Continue with Facebook</CommonButton>
                            <CommonButton variant={'blackBorder'} icon={'apple'}>Continue with Apple</CommonButton>
                        </div>
                        <p className="mt-4">Already have an account ? <Link to="/login" className="underline">Sign in</Link></p>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Register;