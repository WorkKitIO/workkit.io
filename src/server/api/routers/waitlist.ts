import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { db } from "@/server/db";

export const waitlistRouter = createTRPCRouter({
  addEmail: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        const newEntry = await db.waitlist.create({
          data: { email: input.email },
        });
        return {
          success: true,
          message: "Email added to waitlist!",
          data: newEntry,
        };
      } catch (error) {
        return {
          success: false,
          message: "Email already exists or is invalid.",
        };
      }
    }),

  // Fetch waitlist count
  getWaitlistCount: publicProcedure.query(async () => {
    const count = await db.waitlist.count();
    return { success: true, count };
  }),
});
