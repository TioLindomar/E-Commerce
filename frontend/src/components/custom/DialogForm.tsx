// * Já que os panguão do shadcn não consertaram a documentação quanto à tag form dentro do componente Dialog, eu mesmo criei esse aqui pra quebrar o galho

import { cn } from "@/lib/utils";
import React from "react";

type DialogFormProps = React.FormHTMLAttributes<HTMLFormElement> & {
	children: React.ReactNode;
};

export default function DialogForm({
	children,
	className,
	...props
}: DialogFormProps) {
	return (
		<form className={cn("flex flex-col gap-4", className)} {...props}>
			{children}
		</form>
	);
}
