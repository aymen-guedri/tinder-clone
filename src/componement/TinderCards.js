import React,{useState} from 'react'
import styled from 'styled-components'
import TinderCard from 'react-tinder-card';
import { SwipeDown } from '@mui/icons-material';
function TinderCards() {
    const [people,setPeople] = useState([
        {
            name:"Aymen Guedri",
            url:"/images/aymen.jpg",
        },
        {
            name:"Flen foulani",
            url:"/images/aymen.jpg",
        },
    ]);

    const swiped=(direction,nameToDelete)=>{
        console.log("removing "+nameToDelete);
        //setLastDirection(direction);
    }
    const outOfFrame=(name)=>{
        console.log(name+"left the screen !");
    }


  return (
    <Container>
     
     <Card>
     {people.map((person)=>(
        <TinderCard
        className='swipe'
        key={person.name}
        preventSwipe={["up","dom"]}
        onSwipe={(dir)=> swiped(dir,person.name)}
        onCardLeftScreen={()=>outOfFrame(person.name)}
        >
        <div
        style={{ backgroundImage:"url("+person.url+")"}}
        className='card'
        >
        <h3>{person.name}</h3>
        </div>
        </TinderCard>
    ))}
     </Card>
    
    
    </Container>
  )
}

export default TinderCards

const Container=styled.div`
width:100%;
height:100%;
.card{
    position:relative;
    background-color:#fff;
    width:600px;
    padding:20px;
    max-width:85vw;
    height:50vh;
    box-shadow:0px 18px 53px0px rgba(0,0,0,0.3);
    border-radius:20px;
    background-size:cover;
    background-position:center;
}
.card h3{
    position:absolute;
    bottom:0;
    margin 10px;
    color:#fff;
}
`
const Card=styled.div`
display:flex;
justify-content:center;
margin-top:10vh;

.swipe{
    position:absolute;
}
`