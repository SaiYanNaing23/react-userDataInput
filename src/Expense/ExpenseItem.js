import styles from "./ExpenseItem.module.css"
import Card from "../Card/Card";
const ExpenseItem = props =>{
    return (
        <li>
        <Card className={styles.nameAgeWrap}>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.age}>({props.age} years old)</div>
        </Card>
        </li>
    )
}

export default ExpenseItem;