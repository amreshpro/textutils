
export default function capitaliseSentence(text:string){
    return text.split(" ").map((word)=>word[0].toUpperCase()+word.slice(1)).join("").toString()
}