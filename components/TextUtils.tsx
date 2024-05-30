"use client"
import { useState } from "react";
import useThemeStore from "@/store/themeStore";
import Feature from "./Feature";

export default function TextUtils() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const [text, setText] = useState("");

  return (
    <div className="flex flex-col gap-4 p-2">
      <Feature text={text} setText={setText} />
      <textarea
        rows={10}
        cols={10}
        value={text}
        onInput={(e: any) => setText(e.target.value)}
        className={` ${
          isDarkMode ? "dark-box " : "light-box "
        } rounded-lg  outline-none p-4`}
      />


<div className="details">
  <h1 className="text-xl">Preview</h1>
  <p className="mb-2">{text}</p>
  <h1>Total Words: {text.split(/\s+/).filter(word => word !== '').length}</h1>


</div>

    </div>
  );
}
