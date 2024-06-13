import { twMerge } from "tailwind-merge";

export const Container = ({ children, className }) => {
  return (
    <div className={twMerge("w-full", className)}>
      {children}
    </div>
  );
};
