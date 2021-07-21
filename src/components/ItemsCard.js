const ItemsCard = ({key, title, text, date}) => (
  <div key={key}>
    <p>{date}</p>
    <h1>{title}</h1>
    <p>{text}</p>
    <button onClick={console.log("porra")}>Delete</button>
  </div>
);
export default ItemsCard;
