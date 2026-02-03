import { SigninForm } from "../signin-form";

const SigninPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 p-4">
      {/* Logo - Mobile Only */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 md:hidden">
        <img
          src="/assets/dwc-logo.png"
          alt="DWC Logo"
          className="w-48 object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="flex w-full max-w-6xl items-center justify-between gap-12 mt-20 md:mt-0">
        {/* Signin Form Section */}
        <div className="flex w-full flex-col items-center justify-center md:w-[50%]">
          <SigninForm />
        </div>

        {/* Side Image - Desktop */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <img
            src="/assets/dwc-side-image-without-bg.png"
            alt="Docs Without Chaos"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
