CREATE TABLE IF NOT EXISTS public.monthly_payment_report
(
    item integer NOT NULL,
    description varchar(255),
    measured_unit varchar(255),
    quantity float NOT NULL DEFAULT 0.0,
    unit_price float NOT NULL DEFAULT 0.0,
    amount float NOT NULL DEFAULT 0.0,
    prev_quantity float NOT NULL DEFAULT 0.0,
    prev_amount float NOT NULL DEFAULT 0.0,
    this_quantity float NOT NULL DEFAULT 0.0,
    this_amount float NOT NULL DEFAULT 0.0,
    to_date_quantity float NOT NULL DEFAULT 0.0,
    to_date_amount float NOT NULL DEFAULT 0.0,
    CONSTRAINT monthly_payment_report_pkey PRIMARY KEY (item)
);

INSERT INTO monthly_payment_report(item, description, measured_unit, quantity, unit_price, prev_quantity, this_quantity)
VALUES
	(1, 'Field office', 'each', 1.0, 73000.00, 0.6000, 0.0100),
	(2, 'Payment for bonds', 'lump sum', 1.0, 250000.00, 1.0000, 0.0000),
	(3, 'Payment for all insurance', 'lump sum', 1.0, 240000.00, 0.2800, 0.0100), 
	(4, 'Mobilization and demobilization', 'lump sum', 1.0, 280000.00, 0.3600, 0.0000), 
	(5, 'Traffic Control', 'lump sum', 1.0, 175000.00, 0.4100, 0.0100), 
	(6, 'Capital improvement project construction signs', 'each', 44.0, 910.00, 44.0000, 0.0000), 
	(7, 'Construction banners', 'each', 55.0, 10.00, 0.0000, 0.0000),   
	(8, 'Portable changeable message sign', 'Month', 300.0, 300.00, 0.0000, 0.0000),   
	(9, 'Pre-construction and post-construction condition surveys', 'lump sum', 1.0, 49000.00, 0.7000, 0.0000), 
	(10, 'Provision of as-constructed survey and as-built drawings', 'lump sum', 1.0, 116000.00, 0.0000, 0.0000);   

SELECT * FROM monthly_payment_report;




INSERT INTO monthly_payment_report(item, description, measured_unit, quantity, unit_price, prev_quantity, this_quantity, to_date_quantity)
VALUES
	(11, 'testing', 'm', 1000, 100.00, 200, 20, 220);
