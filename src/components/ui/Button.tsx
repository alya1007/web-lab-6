import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, FC } from "react";

const buttonVariants = cva(
	// stiles that always apply to the button
	"active:scale-95 inline-flex items-center justify-center border border-transparent text-sm font-medium transition-color duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 disabled:opacity-50 disabled:pointer-events-none",
	{
		variants: {
			variant: {
				default: "bg-primary text-white hover:bg-secondary",
				ghost:
					"bg-transparent border-solid border-2 border-primary hover:bg-white/30",
			},
			size: {
				default: "h-10 py-1 px-10",
				sm: "h-9 px-5",
				lg: "h-11 px-12",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
	className,
	children,
	variant,
	isLoading,
	size,
	...props
}) => {
	return (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
			disabled={isLoading}
			{...props}
		>
			{isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
			{children}
		</button>
	);
};

export default Button;
