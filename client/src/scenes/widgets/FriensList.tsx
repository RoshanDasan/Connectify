import { useState, useEffect } from 'react'
import { Typography, ButtonBase } from '@mui/material'
import Flex from '../../components/DisplayFlex'
import Friend from '../../components/Friend'
import { useSelector } from 'react-redux'
import { getAllUsers, getUser } from '../../api/apiConnection/userConnection'


const FriensList = ({ onButtonClick }: any) => {
  const token = useSelector((state: any) => state.token)
  const userId = useSelector((state: any) => state.user._id)
  const [listFriend, setListFriend] = useState(false)
  const [users, setUsers] = useState([])
  const [clicked, setClicked] = useState(false)

  const getUserDetails = async () => {
    const details = await getAllUsers(token)
    const userDetail = await getUser(userId, token)
    const excludedArray: any = details.filter((detail: any) => !userDetail.followers.includes(detail._id));
    setUsers(excludedArray)
  }
  const handleshowFreind = () => {
    setClicked(() => !clicked)
  }

  useEffect(() => {
    getUserDetails()
  }, [clicked,onButtonClick])



  return (
    <>
      <Flex>
        <Typography>Suggested for you</Typography>
        <ButtonBase onClick={() => setListFriend(!listFriend)}>See all</ButtonBase>

      </Flex>
      {users.map(({ userName, _id, dp }: any) => (
        _id != userId && (
          <Friend
            key={_id}
            friendId={_id}
            image={dp}
            userName={userName}
            handleshowFreind={handleshowFreind}
            onButtonClick={onButtonClick}
            
          />
        )
      ))}




    </>

  )
}


export default FriensList



