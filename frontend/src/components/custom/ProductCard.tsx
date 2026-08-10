// import shirt_mock from "@/assets/black-shirt-mock.png";
import product_mock from "@/assets/product-mock.png";
import type { Product } from "@ecommerce/shared";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import FavoriteBtn from "./FavoriteBtn";
// import { Separator } from "../ui/separator";

type ProductCardProps = Partial<Product> & {
	canDelete?: boolean;
	canEdit?: boolean;
	product: Product;
	onEditClick: () => void;
	onDeleteClick?: () => void;
	isDeleting?: boolean;
};

export default function ProductCard({
	product,
	canDelete,
	canEdit,
	isDeleting,
	onEditClick,
	onDeleteClick,
}: ProductCardProps) {
	return (
		<>
			<Card className="flex flex-col border border-border rounded-[12px] bg-card max-w-80 p-3 gap-5 hover:bg-accent transition-all hover:cursor-pointer [&:active:not(:focus-within)]:opacity-85 [&:active:not(:focus-within)]:translate-y-0.5">
				<CardHeader className="flex items-center justify-between p-0">
					<h6 className="text-[12px] font-bold text-muted-foreground capitalize">
						{product.category}
					</h6>
					<div className="flex gap-2">
						<FavoriteBtn id={product.id as string} />
						{canEdit && (
							<Button
								variant="outline"
								className="w-8 h-8 rounded-full md:h-9 md:w-9"
								onClick={onEditClick}
							>
								<Pencil />
							</Button>
						)}

						{canDelete && (
							<Button
								variant="destructive"
								size="icon"
								className="w-8 h-8 rounded-full md:h-9 md:w-9"
								disabled={isDeleting}
								onClick={onDeleteClick}
							>
								<Trash2 className="w-4 h-4" />
							</Button>
						)}
					</div>
				</CardHeader>
				<CardContent>
					<img src={product_mock} alt="camisa-preta-mock" />
					{/* <Separator /> */}
				</CardContent>
				<CardDescription className="flex flex-col gap-2">
					<h2 className="font-bold text-md lg:text-base text-card-foreground">{product.price}</h2>
					<h1 className="font-sans text-xs capitalize lg:text-sm text-card-foreground text-wrap">
						{product.name}
					</h1>
				</CardDescription>
			</Card>
		</>
	);
}
