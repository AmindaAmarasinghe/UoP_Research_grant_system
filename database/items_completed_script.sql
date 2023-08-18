CREATE TABLE IF NOT EXISTS public.items_completed
(
	record_no integer NOT NULL PRIMARY KEY,
    updated_date varchar(255) NOT NULL,
    item integer NOT NULL,
    description varchar(255),
    locations varchar(255),
    days_total float NOT NULL
--     CONSTRAINT items_completed_pkey PRIMARY KEY (record_no)
);

SELECT * FROM items_completed;