"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "@/trpc/react";
import { toast } from "sonner";

function WaitlistCount() {
  const { data, isLoading, error } = api.waitlist.getWaitlistCount.useQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load waitlist count.</p>;

  return (
    <span className="text-muted-foreground">
      🚀 Join <span className="text-foreground font-medium">{data?.count}</span>{" "}
      others on the waitlist!
    </span>
  );
}

const formSchema = z.object({
  email: z.string().min(2).max(25),
});
const WaitlistForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const addEmail = api.waitlist.addEmail.useMutation();

  function onSubmit(values: z.infer<typeof formSchema>) {
    addEmail.mutate(values, {
      onSuccess: (res) => {
        if (res.success) {
          toast.success(res.message);
          return;
        }
        toast.error(res.message);
      },
      onError: (res) => {
        toast.error(res.message);
      },
    });
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full max-w-[400px] gap-3"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex w-full max-w-[400px] gap-3">
                    <Input
                      disabled={form.formState.isLoading}
                      type="text"
                      placeholder="you@example.com"
                      className="rounded"
                      {...field}
                    />
                    <Button
                      className="rounded"
                      disabled={
                        !form.formState.isValid || form.formState.isLoading
                      }
                    >
                      Join waitlist
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <WaitlistCount />
    </div>
  );
};

export default WaitlistForm;
