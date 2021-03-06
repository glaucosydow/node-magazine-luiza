'use strict';

const expect = require('chai').expect;
const getProducts = require('../helpers/get-products');

describe('# [API] MAGAZINE LUIZA - CATALOG - PRODUCTS', function() {
	this.timeout(90000);

	let result;
	before(function() {
		return getProducts().then(data => {
			result = data;
		});
	});

	it('Should result to be an array', function() {
		expect(result).to.be.an('array');
	});

	const productProperties = [
		'action',
		'active',
		'category',
		'ncm',
		'id',
		'changeDate',
		'description',
		'descriptionCategory',
		'descriptionSubcategory',
		'images',
		'amountImageDetails',
		'brand',
		'master',
		'model',
		'reference',
		'subcategory',
		'needsMount',
		'price',
		'salePrice',
		'voltage'
	];
	it(`Should result to have properties: ${productProperties.toString()}`,
	function() {
		expect(result[0]).to.have.all.keys(productProperties);
	});
});
