title Comic-Con Parking System
venue [icon:azure-location, color:pink]{
venue_id serial pk
venue_name varchar(20)
venue_location text
created_at timestamp
updated_at timestamp
}

parking_level [icon:database, color:pink]{
level_id serial pk
venue_id int fk
level_name varchar(100)
created_at timestamp
updated_at timestamp
}

parking_zome [icon:target, color:blue]{
zone_id serial pk
level_id int fk
zone_name varchar(100)
zone_location text

created_at timestamp
updated_at timestamp
}

parking_spot [icon:home, color:green]{
spot_id serial pk
zome_id int fk
spot_number int not null
is_vacant boolean
spot_category_id int fk

created_at timestamp
updated_at timestamp
}

parking_spots_categories [color:orange]{
spot_category_id serial pk
spot_category_name varchar(100)
spot_charges decimal(10,2)
total_number_of_spots int not null

created_at timestamp
updated_at timestamp
}

vehicles_categories [color:purple]{
category_id serial pk
category_name varchar(100)

created_at timestamp
updated_at timestamp

}

vehicles [icon:car, color:red]{
vehicles_id serial pk
vehicle_number varchar(50) not null
vehicle_color varchar(50)
vehicle_image url
category_id int fk

created_at timestamp
updated_at timestamp
}

parking_tickets[icon:ticket, color:purple]{
ticket_id serial pk
vehicle_id int fk
parking_sessions_id int fk

created_at timestamp
updated_at timestamp
}
parking_sessions [icon:stopwatch, color:yellow]{
parking_sessions_id serial pk
vehicle_id int fk
entry_time timestamp
exit_time timestamp
event_date date
duration_minutes int
parking_charges decimal(10,2)
session_status text
spot_id int fk

created_at timestamp
updated_at timestamp
}

payment [icon:payment, color:pink]{
payment_id serial pk
parking_sessions_id int fk
payment_status enum('pending','failed','completed','refunded')
transaction_id text not null
payment_method enum('cash','upi','card')
payment_date date
paid_at timestamp

created_at timestamp
updated_at timestamp

}

venue.venue_id < parking_level.level_id

parking_level.level_id < parking_zome.zone_id

parking_zome.zone_id < parking_spot.spot_id

parking_spot.spot_id < parking_spots_categories.spot_category_id

vehicles_categories.category_id < vehicles.vehicles_id

parking_spot.spot_id < parking_sessions.parking_sessions_id

vehicles.vehicle_id < parking_sessions.parking_sessions_id

vehicles.vehicle_id < parking_tickets.ticket_id

parking_tickets.ticket_id < payment.payment_id
