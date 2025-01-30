import Image from "next/image";

export default function Home(){
   return(
    <div className="bg-black h-screen flex items-center justify-center">
      <Image src="/zurag.png" height={100} width={100} />
      <p className="text-2xl text-indigo-500">oyuka</p>
      <p className="text-2xl text-indigo-500">+97688888888</p>
      <p classname="text-2xl text-indigo-500">123@gmail.com</p>
    </div>
   );
}