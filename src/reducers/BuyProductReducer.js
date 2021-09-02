/** @format */

export default function BuyProductReducer(state = [], action) {
	switch (action.type) {
		case 'ADDTOCART':
            console.log(state)
			return [...state, action.payload];
		case 'REMOVEFROMCART':
			return state.filter((item) => item.id !== action.payload.id);
		case 'ADDQUANT':
			return state.map((item) => {
				if (item.id === action.payload.id) {
					item.quant += 1;
				}
				return item;
			});

		case 'REMOVEQUANT':
			return state.map((item) => {
				if (item.id === action.payload.id) {
					if (item.quant > 1) {
						item.quant -= 1;
					}
				}
				return item;
			});
		default:
			return state;
	}
};
