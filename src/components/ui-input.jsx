import { splitProps } from "solid-js"

const UIInput = (props) => {
    const [others] = splitProps(props)
    return <input {...others}/>
}

export default UIInput