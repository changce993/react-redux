import { Div, Col, Text } from 'react-atomize';

const CardProduct = ({ product }) => {
    return (
        <Col size={{xs:12,md:6,lg:4,xl:3}}>
            <Div
                p='1rem'
                bg='white'
                rounded='xl'
                shadow='1'
                hoverShadow='5'
                transition
                m={{b:'1rem'}}
            >
                <Text m={{b:'1rem'}}>Nombre del producto</Text>
                <Text m={{b:'1rem'}}>$132.89</Text>
            </Div>
        </Col>
    )
}

export default CardProduct
