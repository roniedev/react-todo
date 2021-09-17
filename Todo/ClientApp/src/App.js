import React from 'react';
import Todo from './components/Todo';
import { Container } from 'reactstrap';

import './custom.css'

function App()
{
    return (
        <Container className="customContainer">
            <Todo />
        </Container>
    )
}

export default App;