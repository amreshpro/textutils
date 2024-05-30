export default function FeatureButton({text,setText,logicFunction,title}:{text:string,setText:Function,logicFunction:Function,title:string}) {
  function textHandler(logicFunction: Function) {
    const newText = logicFunction(text);
    setText(newText);
  }

  return (
    <button onClick={() => textHandler(logicFunction)}>
{title}
   </button>
  );
}
