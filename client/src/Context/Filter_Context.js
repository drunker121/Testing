import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products:[],
    all_products:[],
    grid_view: true,
    sortingValue: "lowest",
    filters:{
        text:"",
        Category:"",
        city:"",
        property_type:"",
        price: 0,
        pid:"",
    }
};

export const FilterContextProvider = ({children}) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW"});
    };

    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW"});
    };

    const sorting = (event) => {
        let userValue = event.target.value
        dispatch({type: "GET_SORT_VALUE", payload: userValue});
    };

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch( { type: "UPDATE_FILTER_VALUE" , payload: {name , value} } );
    }

    const clearFilters = () => {
        document.getElementById("mySelect1").value = "default";
        document.getElementById("mySelect2").value = "default";
        document.getElementById("mySelect3").value = "default";
        document.getElementById("mySelect4").value = "default";

        dispatch ( { type: "CLEAR_FILTERS"})
    }

    useEffect(() =>{
        // console.log(state.filters.city);
        dispatch({type:"FILTER_PRODUCTS"})
    }, [products, state.filters]); //state.sortingValue bhi tha maine hata diya 

    useEffect(() =>{
        dispatch({type:"SORTING_PRODUCTS"}); 
    }, [products , state.sortingValue]);

    useEffect(() => {
         dispatch({ type: "LOAD_FILTER_PRODUCTS" , payload: products}); 
    },[products]);

    return (
        <FilterContext.Provider value={{...state , setGridView, setListView, sorting, updateFilterValue , clearFilters}}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};