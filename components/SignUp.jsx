import { CardHeader, CardContent, Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import Link from "next/link";

export function Signup() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-sm rounded-xl border">
        <CardHeader className="p-6 rounded-t-xl">
          <div>Sign Up</div>
          <div className="mt-1">
            Enter your information to create an account.
          </div>
        </CardHeader>
        <CardContent className="p-6 flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4">
            <Label className="flex flex-col" htmlFor="name">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Name
              </span>
              <Input
                id="name"
                placeholder="Enter your name"
                required
                type="text"
              />
            </Label>
            <Label className="flex flex-col" htmlFor="email">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Email
              </span>
              <Input
                id="email"
                placeholder="Enter your email"
                required
                type="email"
              />
            </Label>
            <Label className="flex flex-col" htmlFor="password">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Password
              </span>
              <Input
                id="password"
                placeholder="Enter your password"
                required
                type="password"
              />
            </Label>
          </div>
          <Button size="lg">Sign Up</Button>
        </CardContent>
        <CardContent className="p-6 border-t grid gap-2">
          <p className="text-sm leading-none">
            Already have an account?
            <Link className="underline" href="/login">
              Log in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
