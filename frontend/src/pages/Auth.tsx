import { useState } from "react";
import SignIn from "@/components/custom/SignIn";
import SignUp from "@/components/custom/SignUp";
import { ThemeBtn } from "@/components/custom/ThemeToggle";

function Auth() {
	const [isSignUp, setIsSignUp] = useState(true);

	return (
		<>
			<div className="flex justify-end items-center p-4">
				<ThemeBtn />
			</div>
			<main
				id="center"
				className="flex flex-col items-center justify-center gap-3 h-screen"
			>
				{/* // ? Lógica para renderizar o componente de login ou cadastro */}
				{isSignUp ? <SignUp /> : <SignIn />}

				<div>
					{isSignUp ? (
						<p className="text-sm">
							Já tem uma conta?{" "}
							<a
								onClick={() => setIsSignUp(false)}
								className="underline underline-offset-2 cursor-pointer"
							>
								Entrar
							</a>
						</p>
					) : (
						<p className="text-sm">
							Novo por aqui?{" "}
							<a
								onClick={() => setIsSignUp(true)}
								className="underline underline-offset-2 cursor-pointer"
							>
								Criar conta
							</a>
						</p>
					)}
				</div>
			</main>
		</>
	);
}

export default Auth;
