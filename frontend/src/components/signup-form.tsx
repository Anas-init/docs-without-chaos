import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { toastSuccess } from "./custom-toasts";
import { SignupSchema } from "@/zod-validation-schemas/signup-schema";

export function SignupForm() {
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof SignupSchema>) {
    console.log(data);

    toastSuccess({
      message: "Signed Up",
      description: "You are successfully Signed Up to DCW App",
    });
  }

  return (
    <Card className="border shadow-none w-full sm:max-w-md rounded-none">
      <CardHeader>
        <CardTitle className="font-extrabold text-2xl bg-linear-to-r from-blue-400 to-teal-600 bg-clip-text text-transparent md:text-left text-center">
          Account Signup
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form id="signup-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <section className="flex gap-3 md:flex-row flex-col">
              {" "}
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="signup-form-email">Email</FieldLabel>
                    <Input
                      {...field}
                      type="email"
                      id="signup-form-email"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your email"
                      className="rounded-none"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="username"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="signup-form-username">
                      Username
                    </FieldLabel>
                    <Input
                      {...field}
                      type="text"
                      id="signup-form-username"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your username"
                      className="rounded-none"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </section>
            <section className="flex gap-3 md:flex-row flex-col">
              {" "}
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="signup-form-password">
                      Password
                    </FieldLabel>
                    <Input
                      {...field}
                      type="password"
                      id="signup-form-password"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your password"
                      className="rounded-none"
                    ></Input>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="confirmPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="signup-form-confirmPassword">
                      Confirm Password
                    </FieldLabel>
                    <Input
                      {...field}
                      type="password"
                      id="signup-form-confirmPassword"
                      aria-invalid={fieldState.invalid}
                      placeholder="Re-enter your password"
                      className="rounded-none"
                    ></Input>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </section>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-3 px-6 pb-8 pt-2">
        <Button
          type="submit"
          form="signup-form"
          className="w-full rounded-none h-10 bg-linear-to-r from-blue-400 to-teal-600 text-white hover:from-blue-500 hover:to-teal-700 font-semibold transition-all disabled:opacity-60 shadow-md hover:shadow-lg"
        >
          Sign Up
        </Button>

        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-white px-2 text-gray-500">
              Already have an account?
            </span>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full rounded-none h-10 font-medium border-gray-300 hover:bg-gray-50 transition-colors"
          onClick={() => console.log("Create account clicked")}
        >
          Sign In
        </Button>
      </CardFooter>
    </Card>
  );
}
