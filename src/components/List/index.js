import Card from '../Card';
import './styles.css';
const List = ({list, onItemClick}) => {
  return (
    <div className="list">
      {list?.map((it, index)=>
        <Card key={index} onClick={
          ()=>{onItemClick(it)}
          }>
          {it}
        </Card>
        )}
    </div>
  )
}

export default List;