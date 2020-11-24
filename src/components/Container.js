import { Div } from 'react-atomize';

const Container = ({ children }) => {
    return (
        <Div
            p={{x:{xs:'1rem', md:'3rem', lg:'5rem'}}}
            m='0 auto'
            maxW='1920px'
        >
            { children }
        </Div>
    )
}

export default Container
