import toast from "react-hot-toast"

export default function copyText(text:string){
    navigator.clipboard.writeText(text)
    toast.success("Text is Copied Successfully",{
        position:"top-center"
      })
}