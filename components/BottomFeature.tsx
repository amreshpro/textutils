import changeToLowerCase from "@/utils/lowerCase";
import changeToUpperCase from "@/utils/upperCase";
import { LuCaseLower, LuCaseUpper } from "react-icons/lu";

export default function BottomFeature({ text, setText }:{text:string,setText:Function}) {
  function textHandler(logicFunction: Function) {
    const newText = logicFunction(text);
    setText(newText);
  }
  return (
    <div className="flex gap-4">
       
    
    </div>
  );
}
