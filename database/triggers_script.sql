create function mpr_insert_trg_func()
returns trigger
language 'plpgsql'
as $$
declare
begin
	update monthly_payment_report 
	set amount = new.quantity * new.unit_price,
		prev_amount = new.prev_quantity * new.unit_price,
		this_amount = new.this_quantity * new.unit_price,
		to_date_amount = new.to_date_quantity * new.unit_price
	where item = new.item;
return new;
end;
$$;

create trigger mpr_insert_trg
after insert
on monthly_payment_report
for each row
execute procedure mpr_insert_trg_func();



create function mpr_quantity_trg_func()
returns trigger
language 'plpgsql'
as $$
declare
begin
	update monthly_payment_report mpr
	set this_quantity = this_quantity + new.days_total,
		this_amount = (this_quantity + new.days_total) * unit_price,
		to_date_quantity = prev_quantity + this_quantity + new.days_total,
		to_date_amount = (prev_quantity + this_quantity + new.days_total) * unit_price
	from items_completed ic
	where mpr.item = ic.item;
return new;
end;
$$;

create trigger mpr_quantity_trg
after insert
on items_completed
for each row
execute procedure mpr_quantity_trg_func();



