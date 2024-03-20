import { CardHeader, CardContent, Card } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button } from "./ui/button";

export function Login() {
  return (
    <section className="w-full py-12 md:py-24 justify-center h-screen flex">
      <div className="container px-4 flex flex-col gap-4">
        <Card className="w-full max-w-sm mx-auto">
          <CardHeader className="flex flex-col gap-1.5">
            <h2 className="text-2xl font-bold">Log in to your account</h2>
            <p className="text-sm font-medium leading-none text-gray-500">
              Enter your email and password to access your account
            </p>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Email" required type="email" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="#">Forgot password?</Link>
              </div>
              <Input
                id="password"
                placeholder="Password"
                required
                type="password"
              />
            </div>
            <Button className="w-full" type="submit">
              Log in
            </Button>
          </CardContent>
        </Card>
        <div className="flex flex-col items-center gap-2 text-sm">
          <span className="text-gray-500">Don&apos;t have an account?</span>
          <Link className="font-medium underline" href="/signup">
            Create an account
          </Link>
        </div>
      </div>
    </section>
  );
}
