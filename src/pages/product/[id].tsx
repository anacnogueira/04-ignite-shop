import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import { useRouter } from "next/router";

export default function Home() {
  const { query } = useRouter();
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
          reprehenderit, inventore enim aliquam expedita aspernatur fugiat
          nostrum nulla! Accusamus inventore ad ea minima quisquam sequi modi
          hic eos magnam repellat?
        </p>
        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
