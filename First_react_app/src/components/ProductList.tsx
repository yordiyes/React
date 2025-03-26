import { useEffect, useState } from "react"

export default function ProductList({category}: {category: string}) {
    const [product, setProduct] = useState<String[]>([]);

    useEffect(() => {
        console.log("Fetching Products in" ,category)
        setProduct(["Clothing", "Household"])
    },[category]);
  return (
    <div>ProductList</div>
  )
}
