
export default function capitaliseSentence(text:string){
    return text.split(" ").map((word)=>{
        return word[0].toUpperCase()+word.toLowerCase().slice(1)
    }).join(" ")
}