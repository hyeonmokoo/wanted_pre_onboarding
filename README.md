
[sequelize model 정의]
company
rboard

[database table]
rboard
company

sequelize model:create --name rboard --attributes "rboard_id:integer, company_id:integer, company_name:string, nation:string, region:string, postion:string, salary:integer, skill:string, post:string"

db.run('CREATE TABLE recruit('
    +'rboard_id integer primary key,' 
    +'company_id integer not null,' 
    +'company_name text not null,'
    +'nation text not null,'
    +'region text not null,'
    +'position text not null,'
    +'salary integer not null,' 
    +'skill text not null,'
    +'post text not null)'
);

