import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux/es/exports';
//setCurrentPage добавить вниз
import { setCategiryId } from '../redux/slices/filterSlice';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/pizzaBlock/PizzaBlock';
import Skeleton from '../components/pizzaBlock/Skeleton';
import Pagination from '../components/Pagination/index';
import { SearchContext } from '../App';

const Home = () => {
    const dispatch = useDispatch();
    //currentPage добавить вниз
    const { categoryId, sort } = useSelector((state) => state.filter);
    const sortType = sort.sortProperty;

    const { searchValue } = React.useContext(SearchContext);
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [currentPage, setCurrentPage] = React.useState(1); // удвлить

    const onChangeCategory = (id) => {
        dispatch(setCategiryId(id));
    };

    // const onChangePage = (number) => {
    //     dispatch(setCurrentPage(number));
    // };

    const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

    React.useEffect(() => {
        setIsLoading(true);
        const sortBy = sortType.replace('-', '');
        const order = sortType.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        axios
            .get(
                `https://62927954cd0c91932b72bd68.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
            )
            .then((res) => {
                setItems(res.data);
                setIsLoading(false);
            });

        window.scrollTo(0, 0);
    }, [categoryId, sortType, searchValue, currentPage]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">{isLoading ? skeletons : pizzas}</div>
            <Pagination onChangePage={(number) => setCurrentPage(number)} />
            {/* <Pagination currentPage={currentPage} onChangePage={onChangePage()} /> */}
        </div>
    );
};

export default Home;
