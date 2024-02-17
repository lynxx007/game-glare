import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center py-8 space-y-4">
      <h1 className="text-xl font-bold md:text-5xl">Welcome</h1>
      <h4>
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-500">
          Login
        </Link>
      </h4>
      <Card className="w-full max-w-96 md:w-full">
        <form>
          <CardContent className="py-8">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-4">
                <Label htmlFor="email">
                  Email<span className="text-red-500">*</span>
                </Label>
                <Input id="email" placeholder="name@example.com" />
                <Label htmlFor="name">
                  Name<span className="text-red-500">*</span>
                </Label>
                <Input id="name" placeholder="John Doe" />
                <Label htmlFor="password">
                  Password<span className="text-red-500">*</span>
                </Label>
                <Input id="password" placeholder="********" />
                <Label htmlFor="passwordConfirm">
                  Password Confirm<span className="text-red-500">*</span>
                </Label>
                <Input id="password" placeholder="********" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0 flex justify-end">
            <Button type="submit">Register</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
