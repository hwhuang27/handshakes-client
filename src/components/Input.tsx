import styled from 'styled-components';

interface InputProps {
    label: string,
    type: string,
    id: string,
    name: string,
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledLabel = styled.label`
  text-align: left;
  margin: 12px 0 2px;
  font-size: 18px;
  letter-spacing: 1px;
  color: #40513B;
`

const StyledInput = styled.input`
  font-size: 16px;
  padding: 4px 0;
  margin-bottom: 4px;
  letter-spacing: 1px;
  outline: 0;
  border-width: 0 0 2px;
  border-color: #cbd5e1;
  transition: all .15s ease-in-out;

  &:focus {
  border-color: green;
}
`

function Input({label, type, id, name} : InputProps)
{
    return(
        <Wrapper>
            <StyledLabel htmlFor={id}>{label}</StyledLabel>
            <StyledInput
                type={type}
                name={name}
                id={id}
                ></StyledInput>
      </Wrapper>
    )
}

export default Input;