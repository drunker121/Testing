const filterReducer = (state, action) => {
    switch (action.type) {

        case "LOAD_FILTER_PRODUCTS":

            let priceArr = action.payload.map((curElem) => curElem.price);
            // console.log(Math.max.apply(null, priceArr));
            // let maxPrice = priceArr.reduce((initialVal, curVal) => 
            //     Math.max(initialVal, curVal)
            // );
            let maxPrice = Math.max(...priceArr);

            return{
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: { ...state.filters, maxPrice , price: maxPrice}
            };
        
        case "SET_GRID_VIEW": 
            return {
                ...state,
                grid_view: true,
            }
        
        case "SET_LIST_VIEW":
            return{
                ...state,
                grid_view:false,
            }

        case "GET_SORT_VALUE":
            return{
                ...state,
                sortingValue: action.payload,
            };

        case "SORTING_PRODUCTS":
            let newSortData;
            const { filter_products , sortingValue } = state;
            let tempSortData = [...filter_products];

            const sortingProducts = (a,b) => {
                if ( sortingValue === "lowest") {
                    return a.price-b.price;
                }
                if ( sortingValue === "highest") {
                    return b.price-a.price;
                }  
            }

            newSortData = tempSortData.sort(sortingProducts)

            return {
                ...state,
                filter_products:newSortData,
            };

        case "UPDATE_FILTER_VALUE" :
            const { name , value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            };

        case "CLEAR_FILTERS" :

            return {
                ...state,
                filters:{
                    ...state.filters,
                    text:"",
                    Category:"",
                    city:"",
                    property_type:"",
                    price: 0,
                }
            }

        case "FILTER_PRODUCTS":
            let {all_products} = state;
            let tempFilterData = [...all_products];

            const {text, Category, city , property_type , price} = state.filters;

            if (text) {
                tempFilterData = tempFilterData.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text);
                });
            }

            if ( Category ) {
                tempFilterData = tempFilterData.filter((curElem) => {
                    return curElem.Category === Category;
                });
            }

            if ( city ) {
                tempFilterData = tempFilterData.filter((curElem) => {
                   return curElem.city.some(c => c===city);
                })
            }

            if ( property_type ) {
                tempFilterData = tempFilterData.filter((curElem) => {
                    return curElem.property_type.some(c => c ===property_type);
                })
            }

            if ( price ) {
                tempFilterData = tempFilterData.filter((curElem) => {
                    return curElem.price <= price;
                })
            }

            return {
                ...state,
                filter_products:tempFilterData,
            };

        default:
            return state;
    }
};

export default filterReducer;