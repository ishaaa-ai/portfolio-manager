drop database portfolio;

CREATE DATABASE IF NOT EXISTS portfolio;
use portfolio;
CREATE TABLE stock (id int primary key auto_increment, symbol varchar(10) NOT NULL, full_name varchar(60),
			UNIQUE KEY (symbol));
            
insert into stock values(1,'AMZN',"Amazon.com, Inc");
insert into stock values(2,'CRM',"Salesforce Inc");
insert into stock values(3,'DOW',"Dow Inc");
insert into stock values(4,'EXPE',"Expedia Group Inc");
insert into stock values(5,'MCHP',"Microchip Technology Inc");
insert into stock values(6,'NOW',"ServiceNow Inc");
insert into stock values(7,'NRG',"NRG Energy Inc");
insert into stock values(8,'PXD',"Pioneer Natural Resources Co");
insert into stock values(9,'TLSA',"Tiziana Life Sciences Ltd - ADR");

CREATE TABLE price (id int primary key auto_increment,
			stock_id int,
		     FOREIGN KEY (stock_id) REFERENCES stock(id),
                    open_price double,
                    close_price double,
                    volume int,
                    record_date datetime
);

CREATE TABLE portfolio (id int primary key auto_increment,
			stock_id int,
		     FOREIGN KEY (stock_id) REFERENCES stock(id),
                    volume int,
                    record_date datetime
);
