import bcrypt from 'bcryptjs';

export const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'John Smith',
		email: 'john@smith.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false,
	},
	{
		name: 'Alice',
		email: 'Alice@wonderland.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Brent Smith',
		email: 'brent@smith.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Anne Figg',
		email: 'anne@figg.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: false,
	},
];
