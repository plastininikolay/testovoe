import Header from "../header/Header";
import { useEffect } from "react";
import { fetchCards } from "../cards/cardsSlise";
import { useDispatch } from "react-redux";
import ErrorBoundary from '../errorBoundary/ErrorBoundary'
import Category from "../category/Category";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCards());
    // eslint-disable-next-line
  },[])

  return (
    <>
      <Header/>
        <div className="wrapper">
          <ErrorBoundary>
            <Category category={"men's clothing"}/>
            <Category category={"jewelery"}/>
            <Category category={"electronics"}/>
            <Category category={"women's clothing"}/>
          </ErrorBoundary>
        </div>
    </>
  );
}

export default App;
