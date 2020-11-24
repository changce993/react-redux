import { Text, Row } from 'react-atomize'
import Container from './Container'
import CardProduct from './CardProduct'

const Products = () => {
    return (
        <Container>
            <Text
                textAlign='center'
                textSize='t2'
                textWeight='700'
                m={{y:'2rem'}}
            > Productos </Text>

            <Row>
                {[...Array(12)].map((product, index) => {
                    return <CardProduct key={index} />
                })}
            </Row>
        </Container>
    )
}

export default Products
