import Image from "next/image"
import logo from "../../../public/favicon.ico"

export default function Logo(){
    return(
        <div>
            <Image src={logo} width={80} height={80}/>
        </div>
    )
}