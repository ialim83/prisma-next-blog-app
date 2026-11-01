"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function AboutError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex justify-center items-center">
      Something went error <br />
      <Button onClick={() => retry()}>Retry</Button>
    </div>
  );
}
