import ExpenseForm from "./ExpenseForm";
import styles from "./NewExpense.module.css"

const NewExpense = props => {
    const userExpenseHandler = userdata =>{
        props.onSaveExpense(userdata)
    }
    return (
        <div  className={`${styles["new-expense"]}`}>
            <ExpenseForm onSaveUserExpense = {userExpenseHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense;