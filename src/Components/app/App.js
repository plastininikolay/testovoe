import Header from "../header/Header";
import { useEffect } from "react";
import { fetchCategories,fetchCards } from "../cards/cardsSlise";
import { useDispatch } from "react-redux";
import ErrorBoundary from '../errorBoundary/ErrorBoundary'
import Category from "../category/Category";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.cards.categories)
  
  useEffect(()=>{
    dispatch(fetchCategories());
    dispatch(fetchCards())
    // eslint-disable-next-line
  },[])

  const items = categories.map(category => <Category key={category} category={category}/>)

  return (
    <>
      <Header/>
        <div className="wrapper">
          <ErrorBoundary>
            {items}
          </ErrorBoundary>
        </div>
    </>
  );
}

export default App;
