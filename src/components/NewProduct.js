import { Div, Text } from 'react-atomize';
import Container from './Container';
import InputStyles from './InputStyles';
import Button from './Button';

const NewProduct = () => {
    return (
        <Container>
            <Text
                textAlign='center'
                textColor='black60'
                textSize='t2'
                textWeight='700'
                m={{y:'2rem'}}
            >
                Agrega un nuevo producto
            </Text>

            <form>
                <Div w='30rem' maxW='100%' m='0 auto'>
                    <Div m={{b:'1rem'}}>
                        <Text
                            textSize='t0_75'
                            m={{b:'.5rem',l:'.5rem'}}
                        >
                            Nombre del producto
                        </Text>
                        <InputStyles>
                            <input
                                className='input'
                                placeholder='Ingresa el nombre del producto'
                                type='text'
                                name='name'
                            />
                        </InputStyles>
                    </Div>

                    <Div m={{b:'1rem'}}>
                        <Text
                            textSize='t0_75'
                            m={{b:'.5rem',l:'.5rem'}}
                        >
                            Precio del producto
                        </Text>
                        <InputStyles>
                            <input
                                className='input'
                                placeholder='Ingresa el precio del producto'
                                type='number'
                                name='price'
                            />
                        </InputStyles>
                    </Div>

                    <Button>Agregar</Button>
                </Div>
            </form>
        </Container>
    )
}

export default NewProduct
