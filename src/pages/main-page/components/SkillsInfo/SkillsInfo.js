import { Card, CardGroup, Container } from "react-bootstrap";
import './SkillsInfo-style.css'


export default function SkillsInfo () {
    return(
        <Container className="mb-5">
            <Container className="skills-info__wrapper">
                <h2 className="skills-info__header">My Skills</h2>
                <CardGroup>
                    <Card border='0'>
                        <h3>skill1</h3>
                    </Card>
                    <Card border='0'>
                        <h3>skill2</h3>
                    </Card>
                    <Card border='0'>
                        <h3>skill3</h3>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card border='0'>
                        <h3>skill4</h3>
                    </Card>
                    <Card border='0'>
                        <h3>skill5</h3>
                    </Card>
                    <Card border='0'>
                        <h3>skill6</h3>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card border='0'>
                        <h3>skill7</h3>
                    </Card>
                    <Card border='0'>
                        <h3>skill8</h3>
                    </Card>
                    <Card border='0'>
                        <h3>skill9</h3>
                    </Card>
                </CardGroup>
            </Container>
        </Container>
    )
}