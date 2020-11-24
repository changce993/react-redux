import { Div } from 'react-atomize';

const InputStyles = ({ children }) => {
    return (
        <Div
            p='.5rem'
            rounded='xl'
            bg='white'
        >
            { children }
        </Div>
    )
}

export default InputStyles
