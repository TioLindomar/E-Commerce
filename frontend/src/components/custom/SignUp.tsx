import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Mail, Lock, Eye, EyeClosed } from "lucide-react";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import { Field } from "@/components/ui/field";

export default function SignUp() {
	const [showPassword, setShowPassword] = useState(false);
	const [showRepeatPassword, setShowRepeatPassword] = useState(false);

	return (
		<>
			<div
				id="center"
				className="flex flex-col items-center justify-center w-screen"
			>
				<section className="flex flex-col items-center gap-10 lg:w-1/4 md:w-1/2 sm:w-3/4">
					<h1 className="text-5xl font-black uppercase">Cadastro</h1>

					<Field className="flex flex-1">
						{/* Nome */}
						<InputGroup className="h-8">
							<InputGroupAddon className="h-8" align={"inline-start"}>
								<User />
							</InputGroupAddon>
							<InputGroupInput placeholder="Nome" type="text" />
						</InputGroup>

						{/* E-mail */}
						<InputGroup className="h-8">
							<InputGroupAddon className="h-8" align={"inline-start"}>
								<Mail />
							</InputGroupAddon>
							<InputGroupInput placeholder="E-mail" type="email" />
						</InputGroup>

						{/* Senha */}
						<InputGroup className="h-8">
							<InputGroupAddon className="h-8" align={"inline-start"}>
								<Lock />
							</InputGroupAddon>
							<InputGroupInput
								type={showPassword ? "text" : "password"}
								placeholder="Senha"
							/>
							<InputGroupAddon align={"inline-end"} className="cursor-pointer">
								<Button
									onClick={() => setShowPassword(!showPassword)}
									variant={"ghost"}
								>
									<div className="cursor-pointer">
										{showPassword ? <EyeClosed /> : <Eye />}
									</div>
								</Button>
							</InputGroupAddon>
						</InputGroup>

						{/* Repetir senha */}
						<InputGroup className="h-8">
							<InputGroupAddon className="h-8" align={"inline-start"}>
								<Lock />
							</InputGroupAddon>
							<InputGroupInput
								type={showRepeatPassword ? "text" : "password"}
								placeholder="Repita a senha"
							/>
							<InputGroupAddon align={"inline-end"} className="cursor-pointer">
								<Button
									onClick={() => setShowRepeatPassword(!showRepeatPassword)}
									variant={"ghost"}
								>
									<div className="cursor-pointer">
										{showRepeatPassword ? <EyeClosed /> : <Eye />}
									</div>
								</Button>
							</InputGroupAddon>
						</InputGroup>
					</Field>

					{/* Botões de ação */}
					<Field>
						<Button>Criar conta</Button>
						<Button variant={"outline"}>Criar com o Google</Button>
					</Field>
				</section>
			</div>
		</>
	);
}
