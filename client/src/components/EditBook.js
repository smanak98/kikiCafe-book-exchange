import React, {useState, useEffect} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const EditBook = (props)=>{
    const [errors, setErrors] = useState({});
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [sugg1, setSugg1] = useState("");
    const [sugg2, setSugg2] = useState("");
    const [sugg3, setSugg3] = useState("");
    const {id} = props;

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/books/${id}`)
        .then((res)=>{
            setTitle(res.data.title);
            setGenre(res.data.genre);
            setDescription(res.data.description);
            setSugg1(res.data.sugg1);
            setSugg2(res.data.sugg2);
            setSugg3(res.data.sugg3);
            console.log(res.data);
            
        })
        .catch((err)=>{
            console.log(err);
        })
    } ,[id])

    const updateSubmitHandler = (e)=>{
        e.preventDefault();
        const editBook = {title, genre, description, sugg1, sugg2, sugg3};
        axios.put(`http://localhost:8000/api/books/${id}`, editBook)
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
            <form onSubmit={updateSubmitHandler}>
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
                <Navbar.Brand>Edit {title}</Navbar.Brand>
            </Container>
        </Navbar>

                <div>
                    <Form.Group>
                        <Form.Label> Book Title:</Form.Label>
                        <p>
                        <input onChange={(e)=> setTitle(e.target.value)}
                        type="text"
                        name="title"
                        value={title}/>
                        </p>
                        {errors.title ? <span>{errors.title.message}</span> :null}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Book Genre:</Form.Label>
                        <p>
                        <input onChange={(e)=> setGenre(e.target.value)}
                        type="text"
                        name="genre"
                        value={genre}/>
                        </p>
                        {errors.genre ? <span>{errors.genre.message}</span> :null}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Book Description:</Form.Label>
                        <p>
                        <input onChange={(e)=> setDescription(e.target.value)}
                        type="text"
                        name="description"
                        value={description}/>
                        </p>
                        {errors.description ? <span>{errors.description.message}</span> :null}
                    </Form.Group>
                    
                </div>

                <Form.Label >Read if you like (optional) :</Form.Label>
                    <p>
                        <Form.Label>Suggestion 1:</Form.Label>
                        <p>
                        <input onChange={(e)=> setSugg1(e.target.value)}
                        type="text"
                        name="sugg1"
                        value={sugg1}/>
                        </p>
                        {errors.sugg1 ? <span>{errors.sugg1.message}</span> :null}
                    </p>
                    <p>
                        <Form.Label>Suggestion 2:</Form.Label>
                        <p>
                        <input onChange={(e)=> setSugg2(e.target.value)}
                        type="text"
                        name="sugg2"
                        value={sugg2}/>
                        </p>
                        {errors.sugg2 ? <span>{errors.sugg2.message}</span> :null}
                    </p>
                    <p>
                        <Form.Label>Suggestion 3:</Form.Label>
                        <p>
                        <input onChange={(e)=> setSugg3(e.target.value)}
                        type="text"
                        name="sugg3"
                        value={sugg3}/>
                        </p>
                        {errors.sugg3 ? <span>{errors.sugg3.message}</span> :null}
                    </p>
                    <Button type="submit">Update Book Details</Button>
                
            </form>
        </div>
    )
}
export default EditBook;