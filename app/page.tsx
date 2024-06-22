import axios from "axios";
import Image from "next/image";

const getUserDetails = async () => {
  try{
 
    const response = await axios.get(
      "http://localhost:3000/api/user"
    );
    return response.data;
  }catch(error){
    console.error(error)
  }
};
export default async function Home() {
  const userData = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userData?.name}</div>

          {userData?.email}
        </div>
      </div>
    </div>
  );
}
