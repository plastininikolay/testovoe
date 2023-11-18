import Cards from '../cards/Cards';
import './category.sass';

const Category = (props) => {
    return (
        <div className='category'>
            <div className="category__name">{props.category}</div>
                <Cards category={props.category}/>
            <div className="category__wrapper"></div>
        </div>
    );
}
 
export default Category;