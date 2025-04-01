import Card from 'react-bootstrap/Card'
import axios from 'axios'
import { useState, useEffect } from 'react'

export const PrintCard = ()=>{
    const [pcards, setPcards] = useState([])
    useEffect(()=>{
        axios.get('http://api.tvmaze.com/shows')
        .then((response)=>{
            setPcards(response.data)
        })
        .catch
    }, [pcards])
    return(
        <>
         {pcards.map((pcard) =>{
            console.log(pcard);
            
            return(
            <Card style={{ width: '18rem' }} className='mt-3'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>{pcard.name}</Card.Title>
                <Card.Text>
                 {pcard.summary}
                 </Card.Text>
                </Card.Body>
             </Card>
            )
        })}      
        </>
    )
}