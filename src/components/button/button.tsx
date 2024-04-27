import cartIcon from "@/images/icon/cart.svg"
import Image from "next/image"

interface ButtonProps {
    text: string
    icon?: string
    onSubmitAction: () => void

}
export function Button({...props}: ButtonProps) {
    return <button onClick={props.onSubmitAction} style={{outline: 0, borderRadius: "8px", border: 0, padding: '14px 27px 13px 15px', backgroundColor: "white"}}>
            <Image src={cartIcon} alt="a"/>
            {props.text}
        </button>
}