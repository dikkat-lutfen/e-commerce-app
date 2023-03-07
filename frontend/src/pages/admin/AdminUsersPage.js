import UsersPageComponent from "./components/UsersPageComponent"
import axios from "axios"


const fetchUsers = async (abctrl) => {
  const {data} = await axios.get("/api/users", {
      signal: abctrl.signal,
  });
  return data
}


function AdminUsersPage() {

 return <UsersPageComponent fetchUsers={fetchUsers} />
 
}

export default AdminUsersPage