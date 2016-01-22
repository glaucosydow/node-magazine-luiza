'use strict';

var core = require('../core'),
	cepHelper = require('./cep-helper'),
	cartHelper = require('./cart-helper'),

OrderAPI = {
    checkCep(cep) {
		if(!cep) {
			return core.errorHandler('order', 'MISSING_CEP');
		}
		return cepHelper.makeRequest(cep);
    },

	calculateShipping(options) {
		return cartHelper.calculateShipping(options);
	}
};

module.exports = Object.create(OrderAPI);