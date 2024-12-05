import { ModeToggle } from "@/components/theme-mode/toggle-mode";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <header className="gradient h-screen w-screen">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

      <ModeToggle />
    </header>
  );
}
