import { Component, ErrorInfo, ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                <h2 className="text-xl font-bold">Something went wrong</h2>
              </div>
              <p className="text-gray-600 mb-4">
                {this.state.error?.message || "An unexpected error occurred"}
              </p>
              <Button 
                onClick={() => window.location.reload()}
                variant="outline"
              >
                Refresh Page
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
