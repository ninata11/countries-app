import { FormEvent } from "react"

type CardCreateFormProps = {
    onCardCreate: (e: FormEvent<HTMLFormElement>) => void;
};

const CardCreateForm:React.FC<CardCreateFormProps> = ({onCardCreate}) => {
  return (
   <form style={{display:"flex", flexDirection:"column", gap:10, maxWidth: 300}} 
    onSubmit={onCardCreate}>
    <input name="name" />
    <input name="population" />
    <input name="capital" />
    

    <button type="submit">Create Article</button>
   </form>
  )
}

export default CardCreateForm