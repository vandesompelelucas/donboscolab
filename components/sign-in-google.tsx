import { signIn } from "@/auth";
import { Button } from "./ui/button";

export default function SignInGoogle() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button type="submit">Sign with Google</Button>
    </form>
  );
}
