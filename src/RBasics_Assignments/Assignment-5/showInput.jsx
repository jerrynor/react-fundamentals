import {useState} from "react";

const NameForm = () => {
  const [name, setName] = useState("");

  return(
      <div>
        <input value={name} onChange={(event) => setName(event.target.value)}/>
        <button onClick ={() => alert(name)}>Show name</button>;
      </div>
  )
}

export default NameForm;