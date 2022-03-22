import React, {useState, useEffect} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const AllBooks = (props)=>{

    const [bookList, setBookList] = useState([]);
    

    useEffect(()=>{
        axios.get("http://localhost:8000/api/books")
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setBookList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
    //delete button 
    //const deleteHandler = (idFromBelow) =>{
    //    axios.delete(`http://localhost:8000/api/books/${idFromBelow}`)
    //    .then((res)=>{
    //        console.log(res.data);
    //        setBookList(bookList.filter((book)=> book._id !== idFromBelow))
    //    })
    //    .catch((err)=>{
    //        console.log(err);
    //    })
    //}

    return(
        <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Kiki's Cafe</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text><Link to={"/books/new"}>Donate a Book?</Link></Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>Available Books</Navbar.Brand>
            </Container>
        </Navbar>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Likes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookList?

                            bookList.map((book, index)=>(    
                                <tr>
                                    <td><Link to={`/books/${book._id}`}>{book.title}</Link></td>
                                    <td>{book.genre}</td>
                                    <td>
                                        {book.likes}
                                    </td>
                                </tr>
                            ))
                            :null
                        }
                    </tbody>
                </Table>
            
            </div>
        
    )
}
export default AllBooks;


