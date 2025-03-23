"use client";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-10">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
      </div>
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Terms and Conditions for WorkKit.io
          </h1>
          <p className="text-muted-foreground">
            Please read these terms carefully before using our service.
          </p>
        </div>

        <Card>
          <CardContent className="space-y-8 p-6">
            <section id="introduction">
              <h2 className="mb-4 text-xl font-semibold">1. Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to WorkKit.io (&quot;WorkKit,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These
                Terms and Conditions (&quot;Terms&quot;) govern your use of WorkKit.io
                (&quot;Service&quot;). By accessing or using WorkKit.io, you agree to
                comply with and be bound by these Terms. If you do not agree
                with these Terms, please do not use the Service.
              </p>
            </section>

            <Separator />

            <section id="description">
              <h2 className="mb-4 text-xl font-semibold">
                2. Description of Service
              </h2>
              <p className="text-muted-foreground">
                WorkKit.io is an open-source platform designed to help freelance
                developers manage their jobs and clients efficiently. While it
                provides an all-in-one job management solution, users are
                responsible for using their own integrated development
                environments (IDEs).
              </p>
            </section>

            <Separator />

            <section id="account">
              <h2 className="mb-4 text-xl font-semibold">
                3. Account Registration
              </h2>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  To access certain features of the Service, you must create an
                  account.
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  your account credentials.
                </li>
                <li>
                  You agree to provide accurate and complete information during
                  registration.
                </li>
                <li>
                  WorkKit.io reserves the right to suspend or terminate accounts
                  that provide false information or violate these Terms.
                </li>
              </ul>
            </section>

            <Separator />

            <section id="licensing">
              <h2 className="mb-4 text-xl font-semibold">
                4. Open Source Licensing
              </h2>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  WorkKit.io is an open-source platform, and its source code is
                  available under an open-source license.
                </li>
                <li>
                  Contributions to WorkKit.io&apos;s codebase must comply with our
                  Contribution Guidelines and the selected open-source license.
                </li>
                <li>
                  Users may modify and self-host WorkKit.io, but commercial
                  redistribution requires explicit permission.
                </li>
              </ul>
            </section>

            <Separator />

            <section id="responsibilities">
              <h2 className="mb-4 text-xl font-semibold">
                5. User Responsibilities
              </h2>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  You agree not to use WorkKit.io for any illegal, harmful, or
                  abusive activities.
                </li>
                <li>
                  You are responsible for your data, content, and actions within
                  WorkKit.io.
                </li>
                <li>
                  You shall not attempt to reverse engineer, exploit, or misuse
                  the platform.
                </li>
              </ul>
            </section>

            <Separator />

            <section id="payments">
              <h2 className="mb-4 text-xl font-semibold">
                6. Payments and Sponsorships
              </h2>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  WorkKit.io offers GitHub Sponsorships for users who wish to
                  support the project.
                </li>
                <li>
                  Payments for any premium features, if introduced, will be
                  processed securely via Polar.
                </li>
                <li>
                  Refund policies (if applicable) will be outlined separately.
                </li>
              </ul>
            </section>

            <Separator />

            <section id="privacy">
              <h2 className="mb-4 text-xl font-semibold">7. Data Privacy</h2>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  WorkKit.io respects user privacy and follows best practices
                  for data security.
                </li>
                <li>
                  Users are responsible for ensuring their own data compliance
                  when using the platform.
                </li>
                <li>
                  The platform does not collect sensitive user data beyond what
                  is necessary for its functionality.
                </li>
              </ul>
            </section>

            <Separator />

            <section id="availability">
              <h2 className="mb-4 text-xl font-semibold">
                8. Service Availability and Changes
              </h2>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  WorkKit.io is provided &quot;as is,&quot; with no guarantees regarding
                  uptime or reliability.
                </li>
                <li>
                  We reserve the right to modify, suspend, or discontinue any
                  part of the Service at our discretion.
                </li>
              </ul>
            </section>

            <Separator />

            <section id="liability">
              <h2 className="mb-4 text-xl font-semibold">
                9. Limitation of Liability
              </h2>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  WorkKit.io is not responsible for any direct, indirect,
                  incidental, or consequential damages resulting from your use
                  of the Service.
                </li>
                <li>
                  The platform is provided without warranties of any kind,
                  whether express or implied.
                </li>
              </ul>
            </section>

            <Separator />

            <section id="termination">
              <h2 className="mb-4 text-xl font-semibold">10. Termination</h2>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  We reserve the right to suspend or terminate your access to
                  WorkKit.io at any time for violations of these Terms.
                </li>
                <li>
                  Users may delete their accounts and discontinue using the
                  Service at any time.
                </li>
              </ul>
            </section>

            <Separator />

            <section id="changes">
              <h2 className="mb-4 text-xl font-semibold">
                11. Changes to Terms
              </h2>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  We may update these Terms from time to time. Users will be
                  notified of significant changes.
                </li>
                <li>
                  Continued use of WorkKit.io after changes take effect
                  constitutes acceptance of the updated Terms.
                </li>
              </ul>
            </section>

            <Separator />

            <section id="contact">
              <h2 className="mb-4 text-xl font-semibold">
                12. Contact Information
              </h2>
              <p className="text-muted-foreground">
                For any questions regarding these Terms, please contact us at{" "}
                <a
                  href="mailto:support@workkit.io"
                  className="text-primary hover:underline"
                >
                  support@workkit.io
                </a>
                .
              </p>
            </section>

            <Separator />

            <section id="agreement">
              <p className="text-muted-foreground font-medium">
                By using WorkKit.io, you acknowledge that you have read,
                understood, and agreed to these Terms and Conditions.
              </p>
            </section>

            <div className="text-muted-foreground pt-4 text-sm">
              <p>Last Updated: March 23, 2025</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
