import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [frutas, setFrutas] = useState([])

	useEffect(() => {
        const fetchApi = async () => {
        const response = await axios.get("http://localhost:3000/api")
        console.log(response.data.frutas);
        setFrutas(response.data.frutas);
    }
    fetchApi();
    }, []);

	return (
		<main className="flex justify-center items-center h-screen">
			<ul>
                {frutas.map((fruta, index) => {
                    return <li key={index} className="text-center">{fruta}</li>
                })}
            </ul>
		</main>
	);
}
