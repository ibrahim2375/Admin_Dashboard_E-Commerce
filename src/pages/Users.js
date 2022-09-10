import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography'
import UsersTable from '../components/Users/UsersTable'
//api request
import { public_request } from '../util/requestMethods'
//redux
// import { useSelector } from 'react-redux'
function Users() {
  // const admin = useSelector(state => state.admin_data.admin_state)
  const [users, setUsers] = useState([])
  //delete user
  const DeleteUser = async (id) => {
    await public_request.get(`/user/delete/${id}`)
      .then(res => {
        if (res.status === 200) {
          setUsers(users.filter((u) => u._id !== id))
        }
      }).catch(err => console.log(err))
  }
  //get users of osh app e-commerce
  useEffect(() => {
    const getUsers = async () => {
      await public_request.get('/users/get')
        .then(res => {
          setUsers(res?.data)
        }).catch(err => console.log(err))
    }
    getUsers();
  }, [])
  return (
    <>
      <Typography variant='h4' style={{ margin: '20px' }}>Users</Typography>
      <UsersTable users={users} DeleteUser={DeleteUser} />
    </>
  )
}
export default Users