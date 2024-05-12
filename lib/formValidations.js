const messages = {
	name: 'The name format is incorrect',
	price: 'The price format is incorrect',
	email: 'Use a valid email',
	password:
    'The email must be at least 6 digits long with 1 digit 1 uppercase word and 1 lowercase word',
    requireName: 'The name is obligatory',
	requireEmail: 'The email is obligatory',
	requirePassword: 'The password is obligatory',
	requireUserName: 'The username is obligatory',
	requirePrice: 'The price is obligatory',
	requireDescription: 'The description is obligatory'
};

const patterns = {
	name: /^[A-Za-z0-9._\- ]+$/,
	email:
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
	password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/,
    price: /^\d+(\.\d{1,2})?$/

};

export const FORM_VALIDATIONS = {
	name: {
		required: messages.requireName,
		pattern: {
			value: patterns.name,
			message: messages.name
		}
	},
	email: {
		required: messages.requireEmail,
		pattern: {
			value: patterns.email,
			message: messages.email
		}
	},
	password: {
		required: messages.requirePassword,
		pattern: {
			value: patterns.password,
			message: messages.password
		}
	},
	price: {
		required: messages.requirePrice,
		pattern: {
			value: patterns.price,
			message: messages.price
		}
	},
	description: {
		required: messages.requireDescription,
		
	},

};
