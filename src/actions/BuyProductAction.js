/** @format */

export const AddToCart = function (id, quant) {
	let item = {id: id, quant: quant}
	return { type: 'ADDTOCART', payload: item };
};

export const RemoveFromCart = function (id, quant) {
	let item = {id: id, quant: quant}
	return { type: 'REMOVEFROMCART', payload: item };
}

export const RemoveQuant = function (id, quant) {
	let item = {id: id, quant: quant}
	return { type: 'REMOVEQUANT', payload: item };
}

export const AddQuant = function (id, quant) {
	let item = {id: id, quant: quant}
	return { type: 'ADDQUANT', payload: item };
}

