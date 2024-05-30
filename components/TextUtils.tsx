import useThemeStore from "@/store/themeStore";
import BottomFeature from "./BottomFeature";

import TopFeature from "./TopFeature";
import { useState } from "react";

export default function TextUtils() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const [text, setText] = useState("");

  return (
    <div className="flex flex-col gap-4 p-2">
      <TopFeature text={text} setText={setText} />
      <textarea
        rows={10}
        cols={10}
        value={text}
        onInput={(e:any)=>setText(e.target.value)}
        className={` ${
          isDarkMode ? "dark-box " : "light-box "
        } rounded-lg  outline-none p-4`}
      />
   <BottomFeature text={text} setText={setText} />
    </div>
  );
}
