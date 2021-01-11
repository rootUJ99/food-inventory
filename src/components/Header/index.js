import './styles.css';
import Input from '../Input';
const  Header = ({setSearchedItems, itemsToSeatch}) => {
  const handleSearch = (e) => {
    const fileterdItems = itemsToSeatch.filter(it => e.target.value === it.foodname)
    setSearchedItems(fileterdItems);
  }

  return (
    <div className="header">
      <div className="header-content">
        <Input placeholder="Search Movie" onChange={handleSearch}/>
      </div>
    </div>
  )
}

export default Header;