import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";

export default function Home() {
  return (
    <SuccessContainer>
      <h1>Compra Efetuada</h1>
      <ImageContainer></ImageContainer>
      <p>
        Uhuul <strong>Ana Claudia Nogueira</strong>, sua{" "}
        <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua
        casa.
      </p>
      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}
