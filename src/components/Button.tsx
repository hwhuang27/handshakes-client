import styled from 'styled-components';

interface ButtonProps {
    type: 'button' | 'submit' | 'reset' | undefined,
    text: string,
}

const StyledButton = styled.button`
  margin: 4px 0 12px;
  background-color: #9DC08B;
  border: 3px solid #9DC08B;
  border-radius: 20px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding: 6px 20px;
  transition: all .15s ease-in-out;

  &:hover {
  background-color: white;
  color: #9DC08B;
  border: 3px solid #9DC08B;
  }

  &:focus {
  border: 3px solid #9DC08B;
  outline: none;
  }
`

function Button({type, text} : ButtonProps) {

    return (
        <StyledButton type={type}>
            {text}
        </StyledButton>
    )
}

export default Button;