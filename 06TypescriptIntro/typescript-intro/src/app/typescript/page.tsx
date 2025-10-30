import { Hello } from "@/Components/Hello"

export default function MyTypescriptFunction() {
    return(
        <div>
            <p>This is typescript</p>
            <Hello name='Tristan' age={24}/>
        </div>
    )
}