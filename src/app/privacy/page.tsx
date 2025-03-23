"use client"
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
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
            Privacy Policy for WorkKit.io
          </h1>
          <p className="text-muted-foreground">
            Please read our privacy policy carefully to understand how we handle
            your information.
          </p>
        </div>

        <Card>
          <CardContent className="space-y-8 p-6">
            <section id="introduction">
              <h2 className="mb-4 text-xl font-semibold">1. Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to WorkKit.io (&quot;WorkKit,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). Your
                privacy is important to us. This Privacy Policy explains how we
                collect, use, and protect your personal information when you use
                WorkKit.io (&quot;Service&quot;). By using WorkKit.io, you agree to the
                terms outlined in this policy.
              </p>
            </section>

            <Separator />

            <section id="information-collected">
              <h2 className="mb-4 text-xl font-semibold">
                2. Information We Collect
              </h2>

              <h3 className="mt-4 mb-2 text-lg font-medium">
                a) Account Information
              </h3>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  When you create an account, we collect your name, email
                  address, and other necessary details.
                </li>
                <li>
                  You may choose to provide additional profile information.
                </li>
              </ul>

              <h3 className="mt-4 mb-2 text-lg font-medium">b) Usage Data</h3>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  We may collect non-personal data such as device type, browser
                  version, and usage patterns to improve the Service.
                </li>
                <li>We do not track users beyond the scope of WorkKit.io.</li>
              </ul>

              <h3 className="mt-4 mb-2 text-lg font-medium">
                c) Payment Information
              </h3>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  If you sponsor WorkKit.io via GitHub Sponsorships or make
                  payments for premium features, your payment details are
                  processed securely by third-party payment providers like
                  Stripe.
                </li>
                <li>WorkKit.io does not store payment card details.</li>
              </ul>

              <h3 className="mt-4 mb-2 text-lg font-medium">
                d) Cookies and Tracking Technologies
              </h3>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  We may use cookies to enhance user experience and track
                  session activity.
                </li>
                <li>
                  Users can disable cookies in their browser settings, though
                  some features may not function properly.
                </li>
              </ul>
            </section>

            <Separator />

            <section id="information-usage">
              <h2 className="mb-4 text-xl font-semibold">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-2">
                We use collected information for:
              </p>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>Providing and improving the Service.</li>
                <li>Ensuring account security and authentication.</li>
                <li>
                  Communicating with users about updates or important notices.
                </li>
                <li>Analyzing usage trends to enhance functionality.</li>
              </ul>
            </section>

            <Separator />

            <section id="data-sharing">
              <h2 className="mb-4 text-xl font-semibold">
                4. Data Sharing and Third Parties
              </h2>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  We do not sell or share user data with third parties for
                  marketing purposes.
                </li>
                <li>
                  Limited data may be shared with trusted service providers
                  (e.g., hosting, payment processing) to support platform
                  functionality.
                </li>
                <li>
                  We may disclose data if required by law or to protect
                  WorkKit.io&apos;s legal rights.
                </li>
              </ul>
            </section>

            <Separator />

            <section id="data-security">
              <h2 className="mb-4 text-xl font-semibold">5. Data Security</h2>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  We implement industry-standard security measures to protect
                  user data.
                </li>
                <li>
                  While we take precautions, no online service is completely
                  secure. Users should take their own steps to safeguard their
                  credentials.
                </li>
              </ul>
            </section>

            <Separator />

            <section id="user-rights">
              <h2 className="mb-4 text-xl font-semibold">
                6. User Rights and Data Control
              </h2>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  Users can update, modify, or delete their account information
                  at any time.
                </li>
                <li>
                  You can request a copy of your stored data or request its
                  deletion by contacting{" "}
                  <a
                    href="mailto:support@workkit.io"
                    className="text-primary hover:underline"
                  >
                    support@workkit.io
                  </a>
                  .
                </li>
                <li>
                  Some data may be retained for legal or security purposes.
                </li>
              </ul>
            </section>

            <Separator />

            <section id="third-party">
              <h2 className="mb-4 text-xl font-semibold">
                7. Third-Party Links and Services
              </h2>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  WorkKit.io may contain links to third-party services, such as
                  GitHub or payment providers.
                </li>
                <li>
                  We are not responsible for third-party privacy policies or
                  practices.
                </li>
              </ul>
            </section>

            <Separator />

            <section id="childrens-privacy">
              <h2 className="mb-4 text-xl font-semibold">
                8. Children&apos;s Privacy
              </h2>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  WorkKit.io is not intended for individuals under the age of
                  13.
                </li>
                <li>
                  We do not knowingly collect personal data from children. If
                  discovered, such data will be removed.
                </li>
              </ul>
            </section>

            <Separator />

            <section id="changes">
              <h2 className="mb-4 text-xl font-semibold">
                9. Changes to This Privacy Policy
              </h2>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                <li>
                  We may update this Privacy Policy periodically. Users will be
                  notified of significant changes.
                </li>
                <li>
                  Continued use of WorkKit.io after changes take effect
                  constitutes acceptance of the revised policy.
                </li>
              </ul>
            </section>

            <Separator />

            <section id="contact">
              <h2 className="mb-4 text-xl font-semibold">
                10. Contact Information
              </h2>
              <p className="text-muted-foreground">
                For questions about this Privacy Policy, contact us at{" "}
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
                understood, and agree to this Privacy Policy.
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
