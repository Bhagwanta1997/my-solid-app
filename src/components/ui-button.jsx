import { splitProps } from "solid-js";

const UIButton = (props) => {
    const [local, others] = splitProps(props, ["label"])
    return <button {...others}>{local.label}</button>
}

export default UIButton;