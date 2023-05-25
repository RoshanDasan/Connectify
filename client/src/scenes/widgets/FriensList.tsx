import { useState } from 'react'
import { Typography, ButtonBase } from '@mui/material'
import Flex from '../../components/DisplayFlex'
import Friend from '../../components/Friend'



const FriensList = () => {
    const [listFriend, setListFriend] = useState(false)
  return (
    <>
    <Flex>
     <Typography>Suggested for you</Typography>
     <ButtonBase onClick={()=> setListFriend(!listFriend)}>See all</ButtonBase>
     
    </Flex>
    <Friend name='Roshan' subtitle='chalakudy' /><Friend name='Nikhil' subtitle='Kottayam' /><Friend name='Arjun' subtitle='Palakadu' />
    {listFriend?(
        <>
         <Friend name='Rahul' subtitle='Mumbai' /><Friend name='Anirudh' subtitle='Palakkadu' /><Friend name='Sterin' subtitle='Thrissur' />
        </>
        
    ):(
        ''
    )}
   

    </>
         
  )
}

export default FriensList
