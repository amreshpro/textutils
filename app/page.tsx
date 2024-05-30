"use client"
import Container from "@/components/container/Container";
import TextUtils from "@/components/TextUtils";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <Container>
<h1 className="text-center text-2xl font-bold">Text Utils</h1>
<TextUtils/>
<Toaster
  position="top-center"
  reverseOrder={true}
/>
    </Container>
  )
}