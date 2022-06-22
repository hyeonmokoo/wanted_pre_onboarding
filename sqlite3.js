const sqlite3 = require('sqlite3').verbose();

// open local database 
let db = new sqlite3.Database('./data/recruit.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});


db.run('CREATE TABLE recruit('
    +'rboard_id integer primary key,' 
    +'company_id integer not null,' 
    +'company_name text not null,'
    +'nation text not null,'
    +'region text not null,'
    +'position text not null,'
    +'payment integer not null,' 
    +'skill text not null)'
);

db.run('CREATE TABLE company('
    +'company_id integer primary key,' 
    +'company_name text not null)'
);

db.close();

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});