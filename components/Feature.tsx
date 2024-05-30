import useThemeStore from "@/store/themeStore";
import capitaliseSentence from "@/utils/capitaliseSentence";
import firstLetterCaptial from "@/utils/firstLetterCapital";
import getNumber from "@/utils/getNumber";
import changeToLowerCase from "@/utils/lowerCase";
import changeToUpperCase from "@/utils/upperCase";
import { LuCaseLower, LuCaseUpper } from "react-icons/lu";
import { RxLetterCaseCapitalize } from "react-icons/rx";

export default function Feature({
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
    <div
      className={`  flex  flex-wrap justify-center  items-center gap-4 text-xl  p-2 sm:p-0.5 sm:px-1  px-8 py-2 sm:text-md `}
    >
      <button
        onClick={() => textHandler(changeToUpperCase)}
        className={`${
          isDarkMode ? " dark-btn " : " light-btn "
        } px-2 py-2 sm:p-1 rounded-md`}
      >
        <LuCaseUpper />
      </button>

      <button
        onClick={() => textHandler(changeToLowerCase)}
        className={`${
          isDarkMode ? "dark-btn" : "light-btn"
        }  px-2 py-2 sm:p-1 rounded-md`}
      >
        <LuCaseLower />
      </button>
      <button
        onClick={() => textHandler(firstLetterCaptial)}
        className={`${
          isDarkMode ? "dark-btn" : "light-btn"
        }  px-2 py-2 sm:p-1 rounded-md`}
      >
        <RxLetterCaseCapitalize />
      </button>

      <button
        onClick={() => textHandler(capitaliseSentence)}
        className={`${
          isDarkMode ? "dark-btn" : "light-btn"
        }  px-2 py-2 sm:p-1 text-sm rounded-md`}
      >
        Sentence Case
      </button>
      <button
        onClick={() => textHandler((text: string) => text.trim())}
        className={`${
          isDarkMode ? "dark-btn" : "light-btn"
        }  px-2 py-2 sm:p-1 text-sm rounded-md`}
      >
        Trim Space
      </button>

      <button
        onClick={() => textHandler(getNumber)}
        className={`${
          isDarkMode ? "dark-btn" : "light-btn"
        }  px-2 py-2 sm:p-1 text-sm rounded-md`}
      >
        Get Number
      </button>
      {/* clear */}
      <button
        onClick={() => textHandler(() => "")}
        className={`${
          isDarkMode ? "dark-btn" : "light-btn"
        }  px-2 py-2 sm:p-1 text-sm rounded-md`}
      >
        Clear
      </button>
    </div>
  );
}
