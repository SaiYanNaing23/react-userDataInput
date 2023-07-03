import ExpenseItem from "./ExpenseItem";
import styles from "./Expense.module.css"

const Expense = props =>{
    return(
        <ul className={styles.expenses}>
            {props.userData.map((expense)=>
                <ExpenseItem 
                    key = {expense.userName} 
                    name ={expense.userName} 
                    age = {expense.age}>
                </ExpenseItem>
            )}
        </ul>
    )
}

export default Expense;