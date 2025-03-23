"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import MockDashboard from "../MarkUp";
import WaitlistForm from "../forms/waitlist-form";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function Hero({
  title = "Streamline your workflow with WorkKitIO",
  subtitle = "The all-in-one platform for teams to collaborate, manage projects, and deliver results faster than ever before.",
}: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [waitlist, setWaitlist] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    setWaitlist(1)
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-background w-full overflow-hidden py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div
            className="flex flex-col justify-center space-y-4"
            variants={itemVariants}
          >
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              variants={itemVariants}
            >
              {title}
            </motion.h1>

            <motion.p
              className="text-muted-foreground max-w-[600px] md:text-xl"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>

            <motion.div
              className="flex-row-2 mt-6 flex gap-2 min-[400px]:flex-col"
              variants={itemVariants}
            >
                <WaitlistForm/>
              {/* <div>
                <div className="flex w-full max-w-[400px] gap-3">
                  <Input
                    type="text"
                    id="name"
                    placeholder="you@example.com"
                    className="rounded"
                  />
                  <Button className="rounded">Join waitlist</Button>
                </div>
                <span className="text-muted-foreground">
                  <span className="text-foreground font-medium">
                    {waitlist}
                  </span>{" "}
                  people have already joined the waitlist
                </span>
              </div> */}
            </motion.div>

            <motion.div
              className="mt-6 flex items-center gap-2 text-sm"
              variants={itemVariants}
            ></motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="bg-background relative aspect-video w-full max-w-[600px] overflow-hidden rounded-xl border shadow-xl">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-full w-full"
              >
                <MockDashboard />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
