// functions/getProductById.ts
import { produtosDeAcai } from "@/data/produtosAcai";

export async function getProductById(productId: number) {

    const produtoEncontrado = produtosDeAcai.find((produto) => produto.id === productId);

    return produtoEncontrado;
}
