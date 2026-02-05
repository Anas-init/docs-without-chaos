import { Toaster } from "sonner";
// import { BugReportForm } from "./components/login-form";
import TempHome from "./components/temp-home";
import { SigninForm } from "./components/signin-form";
import SigninPage from "./components/pages/SigninPage";
import SignupPage from "./components/pages/SignupPage";

function App() {
  // return <TempHome />;
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 p-4">
      {/* <BugReportForm /> */}
      {/* <LoginForm /> */}
      <SigninPage />
      {/* <SignupPage /> */}
    </div>
  );
}

export default App;
