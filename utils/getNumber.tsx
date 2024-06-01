export default function getNumber(text:string){
const num = text.replace(/[^0-9]/g, '')
console.log(text)
console.log("num: "+num)
 return text.replace(/[^0-9]/g, '') !='' ? text.replace(/[^0-9]/g, '')  : text
}