function Button({type, text} : {
    type: 'button' | 'submit' | 'reset' | undefined,
    text: string,
}) {

    return (
        <button type={type}>{text}</button>
    )
}

export default Button;