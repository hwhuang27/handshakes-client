import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 12px 0;
`

const StyledLabel = styled.label`
    font-size: 18px;
`

const Dropdown = styled.select`
    padding: 4px;
`
interface AvatarProps {
    value: string,
    label: string,
    id: string,
    onChange: ChangeEventHandler,
}

function AvatarSelect({value, label, id, onChange} : AvatarProps){

    return(
        <Container>
            <StyledLabel htmlFor={id}>{label}</StyledLabel>
            <Dropdown 
                value={value} 
                name='avatar' 
                id={id} 
                onChange={onChange}
            >
                <option value="panda">Panda</option>
                <option value="snail">Snail</option>
                <option value="octopus">Octopus</option>
                <option value="wolf">Wolf</option>
                <option value="cat">Cat</option>
                <option value="fish">Fish</option>
                <option value="whale">Whale</option>
                <option value="prawn">Prawn</option>
                <option value="bee">Bee</option>
                <option value="chicken">Chicken</option>
                <option value="elephant">Elephant</option>
                <option value="dolphin">Dolphin</option>
                <option value="hellokitty">Hello Kitty</option>
                <option value="teddybear">Teddy Bear</option>
            </Dropdown>
        </Container>
    )
}

export default AvatarSelect;