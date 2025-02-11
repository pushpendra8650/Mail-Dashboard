import { cn } from "../../lib/utils";

export const Input = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
      )}
      {...props}
    />
  );
};
