title Smart Elevator Control
buildings [icon: building, color: blue] {
  id int pk
  location string
  name string
  no_of_elevators int
  no_of_floors int
  no_of_shafts int
  created_at timestamp
  updated_at timestamp
}

floors [color: blue] {
  id int pk
  building_id int fk
  floor_number int
  floor_label string
  created_at timestamp
  updated_at timestamp
}

shafts [color: red] {
  id int pk
  building_id int fk
  shaft_number string
  shaft_type string
  created_at timestamp
  updated_at timestamp
}

elevators [color: orange, icon: elevenlabs] {
  id int pk
  shaft_id int fk
  current_floor_id int fk
  capacity_kg int
  last_serviced_at datetime
  elevatorStatus enum('moving','idle','underMaintainence')
  isDisabled boolean
  created_at timestamp
  updated_at timestamp
}

elevator_serviced_floors [color: purple] {
  elevator_id int fk
  floor_id int fk
  access_type enum('PUBLIC','STAFF_ONLY','EMERGENCY_ONLY','VIP')
}

ride_requests [color: green] {
  id int pk
  request_floor_id int fk
  final_floor_id int fk
  requested_at timestamp
  status enum('completed','rejected','inProcess')
  created_at timestamp
  updated_at timestamp
}

ride_assignment [color: teal] {
  id int pk
  rideRequest_id int fk
  elevator_id int fk
  assigned_at datetime
  created_at timestamp
  updated_at timestamp
}

ride_logs [icon: history] {
  id int pk
  pickup_time timestamp
  drop_time timestamp
  rideAssignment_id int fk
  elevator_id int fk
  created_at timestamp
  updated_at timestamp
}

maintenance_requests [color: yellow, icon: azure-business-process-tracking] {
  id string pk
  elevator_id int fk
  status enum('PENDING','IN_PROGRESS','COMPLETED')
  note string
  scheduled_at datetime
  resolved_at datetime
  created_at timestamp
  updated_at timestamp
}

maintenance_history [color: pink] {
  id int pk
  maintenanceRequest_id int fk
  changed_status enum('PENDING','IN_PROGRESS','COMPLETED')
  changed_at datetime
  changed_by string
  remarks string
  created_at timestamp
  updated_at timestamp
}


ride_assignment.id - ride_logs.rideAssignment_id
ride_logs.elevator_id > elevators.id
ride_assignment.rideRequest_id - ride_requests.id
ride_assignment.elevator_id > elevators.id
ride_requests.request_floor_id > floors.id
ride_requests.final_floor_id > floors.id
elevators.current_floor_id > floors.id
elevators.shaft_id < shafts.id
shafts.building_id > buildings.id
floors.building_id > buildings.id
maintenance_requests.elevator_id > elevators.id
maintenance_history.maintenanceRequest_id - maintenance_requests.id
elevator_serviced_floors.elevator_id > elevators.id
elevator_serviced_floors.floor_id > floors.id