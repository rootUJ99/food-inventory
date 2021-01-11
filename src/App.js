import {useState} from 'react';
import './App.css';
import List from './components/List';
import Card from './components/Card';
import Button from './components/Button';
import Header from './components/Header';
import { inventoryData } from "./constant";
const menuList = Object.keys(inventoryData.menuDetails);
const menuData = inventoryData.menuDetails;
const App = () => {
  const [foodItems, setFoodItems] = useState(()=> menuData[menuList[0]]);

  const onMenuClick = (item) => {
    setFoodItems(menuData[item]);
  }

  const onCardClick = (item) => {
    const newFoodItems = foodItems.map(foodItem => {
      return (foodItem.foodid === item.foodid) ? {
          ...foodItem,
          ofs: !foodItem.ofs,
        } 
        : 
        {
            ...foodItem
         }
    });
    setFoodItems(newFoodItems);
  }

  const onAllAvailable = () => {
    const filtterdFoodItems = foodItems.filter(foodItem => foodItem.ofs === false);
    setFoodItems(filtterdFoodItems);
  }

  const onAllUnavailable = () => {
    const filtterdFoodItems = foodItems.filter(foodItem => foodItem.ofs === true);
    setFoodItems(filtterdFoodItems);
  }


  return (
    <>
    <Header setSearchedItems={setFoodItems} itemsToSeatch={foodItems}/>
    <div className="app">
      <List list={menuList} onItemClick={onMenuClick}/>
      <div className="food-items">
        {
          foodItems?.map(foodItem => (
          <Card 
            background={!foodItem?.ofs 
              ? 'var(--present-color)' 
              : 'var(--absent-color)'
            }
            onClick={()=> onCardClick(foodItem)}
            key={foodItem.foodid}
            >
            {foodItem.foodname}
          </Card>)
          )
        } 
      </div>
    </div>
      <div className="footer">
        <Button onClick={onAllAvailable}>
          All available
        </Button>
        <Button onClick={onAllUnavailable}>
          All unavailable
        </Button>
      </div>
    </>
  );
}

export default App;
