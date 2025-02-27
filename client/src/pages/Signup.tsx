import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertUser } from "@shared/schema";

export default function Signup() {
  const { toast } = useToast();
  const form = useForm<InsertUser>({
    resolver: zodResolver(insertUserSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const signupMutation = useMutation({
    mutationFn: async (data: InsertUser) => {
      await apiRequest("POST", "/api/signup", data);
    },
    onSuccess: () => {
      toast({
        title: "Account Created",
        description: "Welcome to Tyledeclouds!",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertUser) => {
    signupMutation.mutate(data);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Create Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Username</label>
                <Input
                  {...form.register("username")}
                  placeholder="Choose a username"
                  className="w-full"
                />
                {form.formState.errors.username && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.username.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <Input
                  {...form.register("password")}
                  type="password"
                  placeholder="Choose a password"
                  className="w-full"
                />
                {form.formState.errors.password && (
                  <p className="text-sm text-destructive mt-1">
                    {form.formState.errors.password.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={signupMutation.isPending}
              >
                {signupMutation.isPending ? "Creating Account..." : "Create Account"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
