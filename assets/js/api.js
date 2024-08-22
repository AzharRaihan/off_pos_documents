
$(function () {
    "use strict";
    

	$('.child_nav').hide();
	$(document).on('click', '.start_p', function(){
		$('.start_p').prevUntil('li.start_p').hide();
		$('.start_p').nextUntil('li.start_p').hide();
		$(this).nextUntil("li.start_p").show();
	});

	let itemAddAPI = {
		"api_auth_key": "c10edad9-e361-4ba1-97e3-387f27ba4265",
		"name": "Wardrobe",
		"alternative_name": "wardrobe",
		"type": "General_Product",
		"category_name": "",
		"brand_name": "RFL",
		"supplier_name": "Mr.RFL",
		"alert_quantity": "5",
		"unit_type": "Single Unit",
		"purchase_unit_name": "PCS",
		"sale_unit_name": "PCS",
		"conversion_rate": "1",
		"purchase_price": "33",
		"whole_sale_price": "40",
		"sale_price": "55",
		"description": "Item description",
		"warranty": "1",
		"warranty_type": "Year",
		"guarantee": "1",
		"guarantee_type": "Month",
		"photo": "test.png",
		"loyalty_point": "0",
		"del_status": "Live",
		"opening_stock": [
			{
				"iem_description":"",
				"stock_quantity":"20",
				"outlet_name":"Mirput"
			},
			{
				"iem_description":"",
				"stock_quantity":"20",
				"outlet_name":"Uttara"
			}
		],
		"tax_information": [
			{
				"tax_field_name":"CGST",
				"tax_field_percentage":"20"
			},
			{
				"tax_field_name":"SGST",
				"tax_field_percentage":"20"
			},
			{
				"tax_field_name":"IGST",
				"tax_field_percentage":"20"
			},
			{
				"tax_field_name":"Vat",
				"tax_field_percentage":"20"
			}
		]
	}
	$('#itemAddAPIResponse').text(JSON.stringify(itemAddAPI, null, 4));


	let itemEditAPI = {
		"api_auth_key": "c10edad9-e361-4ba1-97e3-387f27ba4265",
		"name": "Wardrobe",
		"alternative_name": "wardrobe",
		"type": "General_Product",
		"category_name": "",
		"brand_name": "RFL",
		"supplier_name": "Mr.RFL",
		"alert_quantity": "5",
		"unit_type": "Single Unit",
		"purchase_unit_name": "PCS",
		"sale_unit_name": "PCS",
		"conversion_rate": "1",
		"purchase_price": "33",
		"whole_sale_price": "40",
		"sale_price": "55",
		"description": "Item description",
		"warranty": "1",
		"warranty_type": "Year",
		"guarantee": "1",
		"guarantee_type": "Month",
		"photo": "test.png",
		"loyalty_point": "0",
		"del_status": "Live",
		"opening_stock": [
			{
				"iem_description":"",
				"stock_quantity":"20",
				"outlet_name":"Mirput"
			},
			{
				"iem_description":"",
				"stock_quantity":"20",
				"outlet_name":"Uttara"
			}
		],
		"tax_information": [
			{
				"tax_field_name":"CGST",
				"tax_field_percentage":"20"
			},
			{
				"tax_field_name":"SGST",
				"tax_field_percentage":"20"
			},
			{
				"tax_field_name":"IGST",
				"tax_field_percentage":"20"
			},
			{
				"tax_field_name":"Vat",
				"tax_field_percentage":"20"
			}
		]
	}
	$('#itemEditAPIResponse').text(JSON.stringify(itemEditAPI, null, 4));


	let itemUpdateAPI = {
		"api_auth_key": "c10edad9-e361-4ba1-97e3-387f27ba4265",
		"name": "Wardrobe",
		"alternative_name": "wardrobe",
		"type": "General_Product",
		"category_name": "",
		"brand_name": "RFL",
		"supplier_name": "Mr.RFL",
		"alert_quantity": "5",
		"unit_type": "Single Unit",
		"purchase_unit_name": "PCS",
		"sale_unit_name": "PCS",
		"conversion_rate": "1",
		"purchase_price": "33",
		"whole_sale_price": "40",
		"sale_price": "55",
		"description": "Item description",
		"warranty": "1",
		"warranty_type": "Year",
		"guarantee": "1",
		"guarantee_type": "Month",
		"photo": "test.png",
		"loyalty_point": "0",
		"del_status": "Live",
		"opening_stock": [
			{
				"iem_description":"",
				"stock_quantity":"20",
				"outlet_name":"Mirput"
			},
			{
				"iem_description":"",
				"stock_quantity":"20",
				"outlet_name":"Uttara"
			}
		],
		"tax_information": [
			{
				"tax_field_name":"CGST",
				"tax_field_percentage":"20"
			},
			{
				"tax_field_name":"SGST",
				"tax_field_percentage":"20"
			},
			{
				"tax_field_name":"IGST",
				"tax_field_percentage":"20"
			},
			{
				"tax_field_name":"Vat",
				"tax_field_percentage":"20"
			}
		]
	}
	$('#itemUpdateAPIResponse').text(JSON.stringify(itemUpdateAPI, null, 4));


	let itemListAPI = {
		"api_auth_key": "c10edad9-e361-4ba1-97e3-387f27ba4265",
		"name": "Wardrobe",
		"alternative_name": "wardrobe",
		"type": "General_Product",
		"category_name": "",
		"brand_name": "RFL",
		"supplier_name": "Mr.RFL",
		"alert_quantity": "5",
		"unit_type": "Single Unit",
		"purchase_unit_name": "PCS",
		"sale_unit_name": "PCS",
		"conversion_rate": "1",
		"purchase_price": "33",
		"whole_sale_price": "40",
		"sale_price": "55",
		"description": "Item description",
		"warranty": "1",
		"warranty_type": "Year",
		"guarantee": "1",
		"guarantee_type": "Month",
		"photo": "test.png",
		"loyalty_point": "0",
		"del_status": "Live",
		"opening_stock": [
			{
				"iem_description":"",
				"stock_quantity":"20",
				"outlet_name":"Mirput"
			},
			{
				"iem_description":"",
				"stock_quantity":"20",
				"outlet_name":"Uttara"
			}
		],
		"tax_information": [
			{
				"tax_field_name":"CGST",
				"tax_field_percentage":"20"
			},
			{
				"tax_field_name":"SGST",
				"tax_field_percentage":"20"
			},
			{
				"tax_field_name":"IGST",
				"tax_field_percentage":"20"
			},
			{
				"tax_field_name":"Vat",
				"tax_field_percentage":"20"
			}
		]
	}
	$('#itemListAPIResponse').text(JSON.stringify(itemListAPI, null, 4));


	let itemDeleteAPI = {
		"api_auth_key": "c10edad9-e361-4ba1-97e3-387f27ba4265",
		"name": "Wardrobe",
		"alternative_name": "wardrobe",
		"type": "General_Product",
		"category_name": "",
		"brand_name": "RFL",
		"supplier_name": "Mr.RFL",
		"alert_quantity": "5",
		"unit_type": "Single Unit",
		"purchase_unit_name": "PCS",
		"sale_unit_name": "PCS",
		"conversion_rate": "1",
		"purchase_price": "33",
		"whole_sale_price": "40",
		"sale_price": "55",
		"description": "Item description",
		"warranty": "1",
		"warranty_type": "Year",
		"guarantee": "1",
		"guarantee_type": "Month",
		"photo": "test.png",
		"loyalty_point": "0",
		"del_status": "Live",
		"opening_stock": [
			{
				"iem_description":"",
				"stock_quantity":"20",
				"outlet_name":"Mirput"
			},
			{
				"iem_description":"",
				"stock_quantity":"20",
				"outlet_name":"Uttara"
			}
		],
		"tax_information": [
			{
				"tax_field_name":"CGST",
				"tax_field_percentage":"20"
			},
			{
				"tax_field_name":"SGST",
				"tax_field_percentage":"20"
			},
			{
				"tax_field_name":"IGST",
				"tax_field_percentage":"20"
			},
			{
				"tax_field_name":"Vat",
				"tax_field_percentage":"20"
			}
		]
	}
	$('#itemDeleteAPIResponse').text(JSON.stringify(itemDeleteAPI, null, 4));
	









	let saleAPI = {
		"api_auth_key": "c10edad9-e361-4ba1-97e3-387f27ba4265",
		"customer_name": "Waziha Azhar",
		"employee_name": "",
		"total_items": "2",
		"sub_total": "22",
		"paid_amount": "22",
		"previous_due": "0",
		"due_amount": "0",
		"disc": "0",
		"disc_actual": "0",
		"vat": "0",
		"rounding": "0",
		"total_payable": "22",
		"total_item_discount_amount": "22",
		"sub_total_with_discount": "22",
		"sub_total_discount_amount": "22",
		"total_discount_amount": "22",
		"delivery_charge": "22",
		"charge_type": "2",
		"sub_total_discount_value": "2",
		"sub_total_discount_type": "2",
		"sale_date": "2",
		"date_time": "2",
		"grand_total": "2",
		"delivery_partner_name": "2",
		"delivery_status": "2",
		"due_date_time": "2",
		"account_note": "2",
		"account_type": "2",
		"sale_vat_objects": [
			{
				"tax_field_name": "CGST",
				"tax_field_percentage": "20"
			},
			{
				"tax_field_name": "SGST",
				"tax_field_percentage": "20"
			},
			{
				"tax_field_name": "IGST",
				"tax_field_percentage": "20"
			},
			{
				"tax_field_name": "Vat",
				"tax_field_percentage": "20"
			}
		],
		"random_code": "2",
		"note": "",
		"order_date_time": "2",
		"added_date": "2",
		"outlet_name": "Mirpur",
		"items": [
			{
				"item_id": "2",
				"quantity": "2",
				"menu_price_without_discount": "2",
				"menu_price_with_discount": "2",
				"menu_unit_price": "2",
				"purchase_price": "2",
				"menu_vat_percentage": "2",
				"menu_taxes": "2",
				"menu_discount_value": "2",
				"discount_type": "2",
				"menu_note": "2",
				"discount_amount": "2",
				"item_type": "2",
				"expiry_imei_serial": "2",
				"sales_id": "2",
				"is_promo_item": "2",
				"promo_parent_id": "2",
				"item_seller_id": "2",
				"delivery_status": "2",
				"loyalty_point_earn": "2"
			}
		],
		"payment_details": [
			{
				"payment_name": "Cash",
				"currency_type": "",
				"multi_currency": "",
				"multi_currency_rate": "",
				"amount": "",
				"usage_point": "",
				"sale_id": "",
				"added_date": ""
			}
		]
	};
	$('#saleAPIResponse').text(JSON.stringify(saleAPI, null, 4))
	















});

	
	
	
	
	













