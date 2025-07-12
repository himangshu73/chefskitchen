import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "solid" | "soft" | "outline" | "text";
  className?: string;
};

export default function Button({
  children,
  variant = "solid",
  className = "",
}: ButtonProps) {
  const base = "px-5 py-2 rounded-full font-semibold transition";

  const variants = {
    solid: "bg-primary text-white hover:bg-primary/90",
    soft: "bg-primary-15 text-primary hover:bg-primary-15/80",
    outline: "border border-primary text-primary hover:bg-primary-15",
    text: "text-primary hover:underline",
  };

  return (
    <button className={clsx(base, variants[variant], className)}>
      {children}
    </button>
  );
}
