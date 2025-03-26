import Card from 'react-bootstrap/Card'
import axios from 'axios'
import { useState, useEffect } from 'react'

export const PrintCard = ()=>{
    const [pcards, setPcards] = useState([])
    useEffect(()=>{
        axios.get('https://api.tvmaze.com/search/shows')
        .then((response)=>{
            setPcards(response.data)
        })
        .catch
    }, [pcards])
    return(
        <>
         {pcards.map((pcard) =>{
            return(
            <Card style={{ width: '18rem' }} className='mt-3'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content.
                 </Card.Text>
                </Card.Body>
             </Card>
            )
        })}      
        </>
    )
}