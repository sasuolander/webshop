docker compose -p webproject1 -f system.yaml up


The system provides a different set of functionality for each user role. User roles in the system: 

Non-logged-in User

Customer

Administrator


Table 1 below lists the functionality available for the different user roles. By default, when a user comes to the web store pages, they are a Non-logged-in User. 

To use the functionality available for the roles of Customer or Admin, the prerequisite is that a user logs in and has that role. 


Table 1. Role-based Access Control (RBAC)

Role

Permitted functionality

non-logged-in

	register as a new user 

	a new user account (customer) is created

customer

	see products available in the inventory

	see more detailed information about a single product available in the inventory

	purchase products

	see their orders

admin

	get a list of all Customer user accounts

	modify or remove any and all Customer user accounts

	add other Admins

	add or remove products to the inventory

	modify all products

	get a list of all orders in the system

	View detailed information about an order


The project is implemented with Nodejs without modules like Express, permanent data is stored in the MongoDB database. 

Required data models include data models for the Users, Products, and Orders. Other data models can complement these, and groups can add new ones as needed.

The implementation must take into account Web application’s security, and implement sufficient safeguards against security threats.

The default authentication mechanism is Basic authentication.

