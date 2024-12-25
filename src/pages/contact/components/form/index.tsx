import { KeyboardEvent, useState } from "react";
import Styles from "./index.module.css";

const MyForm: React.FC = () => {

    const [formData, setFormData] = useState({
        name: "",
        surname:"",
        email: "",
        message: "",
    });
    
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]:value,
    });
};
  
const SubmitWithEnter = (event: KeyboardEvent<HTMLButtonElement>) => {
    if(event.key === "Enter"){
        console.log("submited");
    }
};
 
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data", formData);
    setFormData({ name: "", surname:"", email: "", message: "" });
};


return (

    <form onSubmit={handleSubmit}  className={Styles.container}>
        
      <label  >Name: 
         <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>  
      
      <label> Surname:
        <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
      </label>
      
      <label>Email:
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label >
      <textarea name="message"  value={formData.message} onChange={handleChange}/>
      </label>
      <button onKeyDown={SubmitWithEnter} >Submit</button>



    </form>
  )
}

export default MyForm