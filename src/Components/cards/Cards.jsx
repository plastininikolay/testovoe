import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { selectAll } from './cardsSlise';
import { cartCreated } from '../cart/cartSlise';
import store from '../../store'
import './cards.sass';

const Card = (props) => {
    const cards = selectAll(store.getState());
    const cardsLoadingStatus = useSelector(state => state.cards.cardsLoadingStatus);
    const dispatch = useDispatch();
    
    const renderItems = (arr) =>{
        // eslint-disable-next-line
        const items = arr.map(item => {if(props.category !== item.category) return;
            return (
                <div key={item.id} className="card">
                    <img src={item.image} alt=''/>
                    <div className="card__name">{item.title}</div>
                    <div className="card__descr">{item.description}</div>
                    <div className="card__wrapper">
                        <div className="card__price">{item.price}$</div>
                        <div className="card__rating">{item.rating.rate}</div>
                    </div>
                    <button onClick={()=>{dispatch(cartCreated(cards[item.id-1]))}} className='card__button'>Купить</button>
                </div>
            )
        })
        return(
            <ul className="card__grid">
                <>
                    {items}
                </>
            </ul>
        )
    }
    const items = renderItems(cards);

    const errorMessage = cardsLoadingStatus === 'error' ? <ErrorMessage/> : null;
    const spinner = cardsLoadingStatus === 'loading' ? <Spinner/> : null;
    
    return (
        <div className="cards">
            {errorMessage}
            {spinner}
            {items}
        </div>
    
    );
}
 
export default Card;