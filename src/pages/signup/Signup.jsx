import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const Signup = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [fileName, setFileName] = useState("");
  const { toast } = useToast();
  const navigator = useNavigate();
  //   const [onSignup, { isLoading }] = useCreateUserMutation();
  const isLoading = false;

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const handleToast = (res) => {
    if (res?.success) {
      toast({
        variant: "default",
        title: "Success",
        description: res.msg || "Account created successfully",
      });
      navigator("/login");
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: res?.msg || "Failed to create account",
      });
    }
  };

  const onSubmit = async (data) => {
    // try {
    //   const imageFile = data.photo;
    //   const formImage = await formatData(imageFile);
    //   const response = await onSignup({
    //     name: data.fullName,
    //     email: data.email,
    //     password: data.password,
    //     photo: formImage,
    //   }).unwrap();
    //   handleToast(response);
    // } catch (err) {
    //   handleToast({
    //     success: false,
    //     msg: err?.data?.message || "An error occurred",
    //   });
    // }
  };

  const togglePasswordView = () => {
    setViewPassword(!viewPassword);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formattedName =
        file.name.length > 15
          ? `${file.name.slice(0, 15)}...${file.name.slice(-3)}`
          : file.name;
      setFileName(formattedName);
      form.setValue("photo", file);
    }
  };

  return (
    <div className="bg-white w-full min-h-[calc(100vh-64px)] flex flex-col">
      <div className="flex flex-col items-center justify-center p-4 w-full flex-grow">
        <Card className="w-full max-w-[400px]">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Create Your Account
            </CardTitle>
            <p className="text-sm text-gray-500 font-medium text-center">
              Welcome! Please enter your details
            </p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* Full Name Input */}
                <FormField
                  control={form.control}
                  name="fullName"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Input */}
                <FormField
                  control={form.control}
                  name="email"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password Input */}
                <FormField
                  control={form.control}
                  name="password"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={viewPassword ? "text" : "password"}
                            placeholder="Enter password"
                            {...field}
                          />
                          <span
                            onClick={togglePasswordView}
                            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                          >
                            {viewPassword ? <FaRegEye /> : <FaEyeSlash />}
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button disabled={isLoading} type="submit" className="w-full">
                  {isLoading ? "Loading..." : "Sign Up"}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <p className="text-sm text-gray-500 mt-4 text-center">
              Already have an account?{" "}
              <Link to={"/login"} className="hover:underline font-semibold">
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
