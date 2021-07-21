function deleteItem(){
    console.log("ui")
}


function ItemsCard({ key, title, text, date }) {
    return(
        <div key={key}>
          <p>{date}</p>
          <h1>{title}</h1>
          <p>{text}</p>
          <button onClick={deleteItem}>Delete</button>
        </div>
    )
}
export default ItemsCard;
