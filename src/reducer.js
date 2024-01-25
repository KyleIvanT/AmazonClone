//data layer goes 

export const initialState = {
    basket: [{ id: 1312312,
                title: "Apple ipad",
                price: 4232,
                rating: 4,
                image: "https://m.media-amazon.com/images/I/51ai3L2tyjL._AC_SY110_.jpg"

    },{ 
    id: 64564564,
    title: "Apple ipad",
    price: 4232,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/51ai3L2tyjL._AC_SY110_.jpg"

}],
    user: null,
};
 export const getBasketTotal = (basket) => 
    basket?.reduce((amount,item) => item.price + amount, 0);
 
function reducer(state, action)
{
    console.log(action);
    switch(action.type)
    {
        case 'ADD_TO_BASKET':
            //logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            
            case 'REMOVE_FROM_BASKET':
                let newBasket = state.basket.slice(); // Use slice to create a new array
                const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
                if (index >= 0) {
                    newBasket.splice(index, 1); // Use splice to remove the item
                } else {
                    console.alert("nothing in the basket");
                }
                return {
                    ...state,
                    basket: newBasket
                };
        default:
            return state;
    }
}

export default reducer;