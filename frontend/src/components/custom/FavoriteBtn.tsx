import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

interface FavoriteBtnProps {
	id: string;
}

export default function FavoriteBtn(props: FavoriteBtnProps) {
	const [isFavorite, setIsFavorite] = useState(false);

	return (
		<Button
			className="p-0 rounded-full md:h-9 md:w-9 h-8 w-8 hover:bg-primary"
			onClick={() => {
				setIsFavorite((prev) => !prev);
			}}
			key={props.id}
		>
			<Heart
				strokeWidth={2.5}
				className={`
    				${
							isFavorite
								? "stroke-background fill-background"
								: "stroke-background fill-none"
						}
					md:size-5 size-4`}
			/>
		</Button>
	);
}
