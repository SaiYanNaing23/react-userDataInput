import { useState } from "react";
import styles from "./ExpenseForm.module.css"


const ExpenseForm = props =>{
    const [userName,setUserName] =useState("");
    const [age,setAge] = useState("");
    const nameHandler = event =>{
        setUserName(event.target.value);
    }
    const ageHandler = event =>{
        setAge(event.target.value)
    }
    const formSubmitHandler = event =>{
        event.preventDefault()
        const submitUser = {
            userName,
            age,
        }
        props.onSaveUserExpense(submitUser)
        setUserName("");
        setAge("");
    }
    return(
        <form onSubmit={formSubmitHandler}>
        <div className={`${styles["new-expense__controls"]}`}>
            <div className={`${styles["new-expense__control"]}`}>
                <label>
                    Your Name
                </label>
                <input type="text" onChange={nameHandler} value={userName}></input>
            </div>
            <div className={`${styles["new-expense__control"]}`}>
                <label>
                    Age (Years)
                </label>
                <input type="number" onChange={ageHandler} value={age}></input>
            </div>
            <div className={`${styles["new-expense__actions"]}`}> 
                <button type="submit">Add User</button>
            </div>
        </div>
        </form>
    )
}

export default ExpenseForm;