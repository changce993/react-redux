import { Div, Text } from 'react-atomize';
import { Link } from 'react-router-dom';
import Container from './Container'

const Navbar = () => {
    return ( 
        <Div bg='primary100'>
            <Container>
                <Div
                    d='flex'
                    justify='space-between'
                    align='center'
                    h='5rem'
                >
                    <Link to='/'>
                        <Text textColor='black80'>
                            CRUD - React, Redux API Rest & Axios
                        </Text>
                    </Link>


                    <Link to='/products/new-product'>
                        <Div
                            p='1rem'
                            bg='primary90'
                            hoverBg='primaryDark'
                            transition
                            rounded='xl'
                            textColor='white'
                            cursor='pointer'
                        >
                            Agregar producto
                        </Div>
                    </Link>
                </Div>
            </Container>
        </Div>
     );
}
 
export default Navbar;