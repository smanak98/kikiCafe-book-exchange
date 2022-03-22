import React, {useState, useEffect} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';

const NewBook = (props)=>{
    const [errors, setErrors] = useState("");
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [sugg1, setSugg1] = useState("");
    const [sugg2, setSugg2] = useState("");
    const [sugg3, setSugg3] = useState("");
    const [likes, setLikes] = useState("");

    const newSubmitHandler = (e)=>{
        e.preventDefault();
        const newBookAdded = {title, genre, description, sugg1, sugg2, sugg3};
        axios.post(`http://localhost:8000/api/books`, newBookAdded)
        .then((res)=>{
            console.log(res.data);
            navigate("/");
        })
        .catch((err)=>{
            console.log(err);
            setErrors(err.response.data.errors);
        })
    }
    

    return(
        <div>
            <form onSubmit={newSubmitHandler} >
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Kiki's Cafe</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text><Link to={"/"}>Home</Link></Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <Navbar bg="light">
            <Container>
                <Navbar.Brand>Want to donate a book?</Navbar.Brand>
            </Container>
            </Navbar>
                
                <div >
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Book Title:</Form.Label>
                        <p>
                        <input onChange={(e)=> setTitle(e.target.value)}
                        type="text" placeholder="Enter Book Title"
                        name="title"
                        value={title}/>
                        </p>
                        {errors.title ? <span>{errors.title.message}</span> :null}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Book Genre: </Form.Label>
                        <p>
                        <input onChange={(e)=> setGenre(e.target.value)}
                        type="text" placeholder="Enter Book Genre"
                        name="genre"
                        value={genre}/>
                        </p>
                        {errors.genre ? <span>{errors.genre.message}</span> :null}
                    </Form.Group >
                    <Form.Group> 
                        <Form.Label>Book Description:</Form.Label>
                        <p>
                        <input onChange={(e)=> setDescription(e.target.value)}
                        type="text" placeholder="Enter Book Description"
                        name="description"
                        value={description}/>
                        </p>
                        {errors.description ? <span>{errors.description.message}</span> :null}
                    </Form.Group>
                    
                    <label >Read if you like (optional):</label>
                    <p >
                        
                        <Form.Label>Suggestion 1 :</Form.Label>
                        <p>
                        <input onChange={(e)=> setSugg1(e.target.value)}
                        type="text"
                        name="sugg1"
                        value={sugg1}/>
                        </p>
                    </p>
                        <Form.Label>Suggestion 2 :</Form.Label>
                        <p>
                        <input onChange={(e)=> setSugg2(e.target.value)}
                        type="text"
                        name="sugg2"
                        value={sugg2}/>
                        </p>
                    <p >
                        <Form.Label>Suggestion 3 :</Form.Label>
                        <p>
                        <input onChange={(e)=> setSugg3(e.target.value)}
                        type="text"
                        name="sugg3"
                        value={sugg3}/>
                        </p>
                    </p>
                    <Button type="submit" variant="primary">Submit</Button>
                </div>

                
                
            </form>
        </div>
    )
}
export default NewBook;