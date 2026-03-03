import { connection } from "next/server";
import { CatImage } from "./cat-image";
import { fetchImage } from "./fetch-image";
import "./page.module.css"

export default async function Home() {
  await connection();
  
  const image:any = await fetchImage();

  console.log("Home:画像情報を取得しました", image);
  return <CatImage url={image.url} />;
}