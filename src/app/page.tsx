import { Hero } from "@/components/landing/hero";
import Image from "next/image";
import Link from "next/link";
import { FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 items-center border-b px-4 lg:px-6">
        <div className="flex items-center gap-2 font-semibold">
          <div className="h-6 w-6 rounded-full">
            <Image src="/logo.png" alt={"logo"} width={30} height={30} />
          </div>
          <span>WorkKit.IO</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="https://x.com/WorkKitIO"
            target="_blank"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            <FaSquareXTwitter size={30} />
          </Link>
          <Link
            href="https://github.com/WorkKitIO/workkit.io"
            target="_blank"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            <FaSquareGithub size={30} />
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <Hero
          title="Streamline your workflow with WorkKit.IO"
          subtitle="The all-in-one open Source platform for teams and solo freelancers to collaborate, manage projects, and deliver results faster than ever before."
          ctaText="Get Started Free"
          secondaryCtaText="Book a Demo"
          imageSrc="/placeholder.svg?height=600&width=800&text=WorkKitIO+Dashboard"
        />
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} WorkKitIO. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* <Link
              href="/contributers"
              className="text-muted-foreground text-sm underline-offset-4 hover:underline"
            >
              Contributers
            </Link> */}
            <Link
              href="/terms"
              className="text-muted-foreground text-sm underline-offset-4 hover:underline"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground text-sm underline-offset-4 hover:underline"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
