import { Div } from 'react-atomize';

const Button = ({ children }) => {
    return (
        <Div m='0 auto' w='20rem'>
            <button className='btn' type='submit'>
                <Div
                    w='20rem'
                    maxW='100%'
                    bg='primary100'
                    hoverBg='primaryDark'
                    transition
                    textColor='white'
                    textAlign='center'
                    p='.5rem'
                    rounded='xl'
                    cursor='pointer'
                >
                    { children }
                </Div>
            </button>
        </Div>
    )
}

export default Button
