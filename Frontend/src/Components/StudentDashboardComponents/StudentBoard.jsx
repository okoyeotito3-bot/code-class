import { useEffect,useState } from "react";
import { supabase } from "../../supabase";

export default function StudentBord(){

 const [userName,setUserName]=useState('')

    async function getUserData(){
   const {data,error} = await supabase.auth.getUser()

  console.log(data.user.user_metadata.full_name);

   if(!error){
    setUserName(data.user.user_metadata.full_name)
   }
   
    }

   useEffect(() => {
 getUserData()
}, []);
    
    return(
        <section>
            <header>
                <h1 className="text-white">Welcome back,{userName} </h1>
            </header>
            <div></div>
            <div></div>
            <div></div>
        </section>
    );
}

