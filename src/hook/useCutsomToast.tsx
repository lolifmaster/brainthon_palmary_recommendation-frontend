import { buttonVariants } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

export const useCustonToast = ({ reset }: { reset: () => void }) => {
  const resetToast = () => {
    const { dismiss } = toast({
      title: "Number of products exceeded",
      description: "You already selected 3 products ",
      variant: "destructive",
      action: (
        <div
          className={cn(
            buttonVariants({
              variant: "secondary",
            }),
            "cursor-pointer",
          )}
          onClick={() => {
            reset();
            dismiss();
          }}
        >
          Reset
        </div>
      ),
    });
  };

  return { resetToast };
};
