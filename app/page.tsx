"use client"
import Container from "@/components/container/Container";
import TextUtils from "@/components/TextUtils";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <Container>
<h1 className="text-center sm:text-2xl text-3xl  mb-2 mt-1 font-bold">Text Utils</h1>
<TextUtils/>
<Toaster
  position="top-center"
  reverseOrder={true}
/>
    </Container>
  )
}