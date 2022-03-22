import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const DisplayBook = (props)=>{

    const {id} = props;

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [sugg1, setSugg1] = useState("");
    const [sugg2, setSugg2] = useState("");
    const [sugg3, setSugg3] = useState("");
    const [likes, setLikes] = useState("");

    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then((res)=>{
                setTitle(res.data.title);
                setGenre(res.data.genre);
                setDescription(res.data.description);
                setSugg1(res.data.sugg1)
                setSugg2(res.data.sugg2)
                setSugg3(res.data.sugg3)
                setLikes(res.data.likes);
                console.log(res);
                console.log(res.data);
            })
            .catch((err)=>console.log(err))
    }, [id])

    const updateSubmitHandler = (e)=>{
        e.preventDefault();
        const editLikes = {likes};
        axios.put(`http://localhost:8000/api/books/${id}`, editLikes)
        .then((res)=>{
            console.log(res.data);
            setLikes(likes + 1);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    const deleteHandler=()=>{
        axios.delete(`http://localhost:8000/api/books/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/");

            })
            .catch((err)=>console.log(err))
    };

    
    
        


    return(
        <div >
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
                <Navbar.Brand> More about: {title}</Navbar.Brand>
            </Container>
        </Navbar>
            
            <ListGroup>
            <ListGroup.Item> Book Genre:  {genre}</ListGroup.Item>
            <ListGroup.Item> Description: {description}</ListGroup.Item>
            <ListGroup.Item>Read if you like:
                <p style={{ marginLeft:"50px"}}>{sugg1}</p>
                <p style={{ marginLeft:"50px"}}>{sugg2}</p>
                <p style={{ marginLeft:"50px"}}> {sugg3}</p>
            </ListGroup.Item>
            </ListGroup>
                
            <Button variant="primary" onClick={deleteHandler}> Borrow {title}</Button>
            
            <Button onClick={updateSubmitHandler}>Double Tap to Like</Button>
            <Button><Link to={`/books/${id}/edit`} style={{color:"white", textDecoration:"none"}}>Edit</Link></Button>
        </div> 
    );
};
export default DisplayBook;