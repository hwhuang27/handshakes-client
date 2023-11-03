function TextInput({label, type, id, name} : {
    label: string,
    type: string,
    id: string,
    name: string,
}){
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input 
                type={type}
                name={name}
                id={id}
            />
        </div>
    )
}

export default TextInput;