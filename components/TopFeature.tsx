import useThemeStore from "@/store/themeStore";
import firstLetterCaptial from "@/utils/firstLetterCapital";
import changeToLowerCase from "@/utils/lowerCase";
import changeToUpperCase from "@/utils/upperCase";
import { LuCaseLower, LuCaseUpper } from "react-icons/lu";
import { RxLetterCaseCapitalize } from "react-icons/rx";

export default function TopFeature({
  text,
  setText,
}: {
  text: string;
  setText: Function;
}) {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  function textHandler(logicFunction: Function) {
    const newText = logicFunction(text);
    console.log("clicked " + newText);
    setText(newText);
  }
  return (
    <div className="flex gap-4 text-xl">
      <button
        onClick={() => textHandler(changeToUpperCase)}
        className={`${isDarkMode ? "dark-btn" : "light-btn"}`}
      >
        <LuCaseUpper />
      </button>

      <button
        onClick={() => textHandler(changeToLowerCase)}
        className={`${isDarkMode ? "dark-btn" : "light-btn"}`}
      >
        <LuCaseLower />
      </button>
      <button
        onClick={() => textHandler(firstLetterCaptial)}
        className={`${isDarkMode ? "dark-btn" : "light-btn"}`}
      >
        <RxLetterCaseCapitalize />
      </button>

      <button
        onClick={() => textHandler(() => "")}
        className={`${isDarkMode ? "dark-btn" : "light-btn"} text-lg`}
      >
        Clear
      </button>
    </div>
  );
}
