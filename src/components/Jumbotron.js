import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
 jumbotron {
     background: url(${})
 }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay">
            </div>
            <Container>
                <h1>Welcome</h1>
                <p>Learn to code bla bla la fme</p>
            </Container>
        </Jumbo>
    </Styles>
)