
import React, { useEffect, useState } from 'react'


 

const EmployeeDatas = [
   {
       id:1,
       firstName : "Virat",
       lastName :"Kohli",
       age :40,
   },

   {
       id:2,
       firstName : "Rohit",
       lastName :"Sharma",
       age :43,
   },

   {
       id:3,
       firstName : "Kl",
       lastName :"Rahul",
       age :45,
   },
];

export default function Curd() {
      
   const [data, setData] = useState([]);

   const [firstName, setFirstName] = useState("")

   const [lastName,setLastName] = useState ('')

   const [age,setAge] = useState (0)

   const [id,setId] = useState (0)

   const[isUpdate,setIsUpdate] = useState(false);

   useEffect (()=>{

       setData(EmployeeDatas)
   },[]);

   const handleEdit = (id)=>{

       // alert(id);

       const dt = data.filter(item => item.id == id);

       if(dt !== undefined)
       {
           setIsUpdate(true)
           setId(id);
           setFirstName(dt[0].firstName);
           setLastName(dt[0].lastName);
           setAge(dt[0].age);
       }
   }

   const handleDelete = (id) =>{

       // alert(id);
         
       if(id > 0)
       {
           if(window.confirm ("Are you sure to delete this item ?"))
           {
               const dt = data.filter(item => item.id !== id);

               setData(dt);
           }
          
       }

   }
   

   const handleSave = (e)=>{

       let error = '';

       if(firstName == '')

           error+= "First name is required,  ";

           if(lastName == '')

               error+= "   Last name is required,  ";

               if(age <= 0)

                   error+= "   Age is required";



                   if(error == '')
                   {

                      e.preventDefault();

       const dt = [...data];

       const newObject = {

           id: EmployeeDatas.length + 1,
           firstName: firstName,
           lastName : lastName,
           age : age,
       }

       dt.push(newObject);

       setData(dt);

   
   }

      else{
             alert(error)
      }
       
   }
      
     

   const handleUpdate = ()=>{
      
       const index = data.map((item)=>{
           return item.id
       }).indexOf(id) // searching element in arry data .
         
       const dt = [...data];

       dt[index].firstName =firstName;
       dt[index].lastName = lastName;
       dt[index].age = age;

       setData(dt);
       
       handleClear();
   
   }

   const handleClear = ()=>{
        
       setId(0);
       setFirstName('');
       setLastName('');
       setAge('');
       setIsUpdate(false);
   
   }

  return (
    <div className='container py-8 ' >

        <h1 className='text-center' >Curd operaction</h1>

       <div className='flex justify-center py-14 ' >
                 
                
           <div>
               <label >First Name :</label>
               <input type="text" name="" id="" placeholder='Enter First Name' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
           </div>

           
           <div>
               <label >Last Name :</label>
               <input type="text" name="" id="" placeholder='Enter Last Name' onChange={(e)=> setLastName(e.target.value) } value={lastName} />
           </div>

           
           <div>
               <label >Age :</label>
               <input type="text" name="" id="" placeholder='Enter Age' onChange={(e)=> setAge(e.target.value)} value={age} />
           </div>

           <div>
               
               {
                   isUpdate == false ?
                       
                   <button className='btn btn-primary  ' onClick={(e)=> handleSave(e) } >Save</button>

                   :
                   <button className='btn btn-warning' onClick={()=> handleUpdate() } >Update</button>
               }
          

          

           <button className='btn btn-danger' onClick={()=> handleClear() } >Clear</button>
           </div>

       </div>

       <table className='table table-hover'  >
           <thead>
               <tr>
                   <td>Sr.No</td>
                   <td>Id</td>
                   <td>First Name</td>
                   <td>Last Name</td>
                   <td>Age</td>
                   <td>Actions</td>
               </tr>
           </thead>

           <tbody>
               {
                   data.map((item,index)=>{
                       return(
                           <tr key={index} >
                               <td> {index+ 1} </td>
                               <td> {item.id} </td>
                               <td> {item.firstName} </td>
                               <td> {item.lastName} </td>
                               <td> {item.age} </td>
                               <td>
                                   <button className='btn btn-primary' onClick={()=> handleEdit(item.id) } >Edit</button>&nbsp;

                                   <button className='btn btn-danger' onClick={()=> handleDelete(item.id) } >Delete</button>
                               </td>
                           </tr>
                       )
                   })
               }
           </tbody>
       </table>
    </div>
  )
}