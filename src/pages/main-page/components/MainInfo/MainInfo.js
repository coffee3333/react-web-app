import { Card, CardGroup, Container } from 'react-bootstrap'
import './MainInfo-style.css'



export default function MainInfo() {
    return (
        <Container className='mb-5'>
            <CardGroup gap={0} className='main-info__wrapper mx-auto'>
                <Card border='0'>
                    <Card.Body className='mx-auto'>
                        <div className='photo-info'/>
                    </Card.Body>
                </Card>
                <Card border='0'>
                    <Card.Body className='mx-auto'>
                        <div className='main-desc__wrapper'>
                            <h1 className='main-desc__name'>Atai Mamytov</h1>
                            <p className='main-desc'>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>

    )
}