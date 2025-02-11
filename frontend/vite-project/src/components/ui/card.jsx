import { cn } from "../../lib/utils";

const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "border border-gray-200 p-4 rounded-lg shadow-md bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export { Card };
