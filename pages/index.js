
import styled from 'styled-components'
import Main from '../components/Main'
import Skills from '../components/Skills'
import Languages from '../components/Languages'
import Hobbies from '../components/Hobbies'
import Youtube from '../components/Youtube'
import Contacts from '../components/Contacts'



const CV = styled('div')`
width:1400px;
height:200px;
background-color: blue;
margin:auto;
`;

export default function Home() {
  return (
    <CV >
         <Main/>
         <Skills/>
         <Languages/>
         <Hobbies/>
         <Youtube/>
         <Contacts/>
    </CV>
  )
}
