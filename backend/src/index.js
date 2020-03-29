const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/* Line that say to express the security module */
app.use(cors());

/*Line that say to express to convert all things that are returned to Json Object*/
app.use(express.json());

/*Line that say to express to use the routes from routes file */
app.use(routes);

/* 
* GET: Search a information in back-end
* POST: Create a information in back-end
* PUT: Alter a information in back-end
* DELETE: Delete a information in back-end
*/

/*
* Types of Parameters
* Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
* Route Params: Parameters used to identify resources
* Request Body: Body of requisition, used to create or altered resources
*/

/*
* SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, etc..
*/

/* Start Server */
app.listen(3333);