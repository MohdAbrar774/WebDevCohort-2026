patient [icon:user, color:blue]{
  patient_id int pk
  name varchar(50)
  age  int 
  gender string CHECK('Male','Female')
  phone char(12)

}

doctor [icon:doctor, color:navy-blue]{
  doctor_id int pk
  name varchar(50)
  speciality_id int fk

}

speciality [icon:archive, color:red]{
  speciality_id int pk
  name string CHECK('cardiology', 'dermatology')
}

appointment [icon:check-circle, color:green]{
  appointment_id int pk
  appointment_date date
  status     string CHECK('booked','cancelled','completed','no_show');

}

consultation [icon:aws-customer-enablement, color:green]{
consultation_id int pk
appointment_id int (fk,null)
patient_id int fk
doctor_id int fk
visit_date date
notes text
}
diagnostic_test [icon:test-tube, color:pink]{
  test_id int pk
  name     varchar(50)
  cost    decimal(5,2)
}

prescribed_test [icon:tesseract, color:pink]{
  prescribed_test_id int pk
  consultation_id int fk
  test_id  int fk
  status  string CHECK('pending','completed')

}

report [icon:report, color:yellow]{
  report_id int pk
  prescribed_test_id int fk
  result string
  report_date  date
}

payment [icon:payment, color:green]{
  payment_id int pk
  consultation_id int fk
  amount decimal(5,2)
  payment_date date

  payment_type string CHECK('upi','cash','credit/debit')
}

patient.patient_id  < appointment.appointment_id

doctor.doctor_id  < appointment.appointment_id

appointment.appointment_id  - consultation.consultation_id
patient.patient_id  < consultation.consultation_id
 
doctor.doctor_id  < consultation.consultation_id

doctor.doctor_id  - speciality.speciality_id


consultation.consultation_id  < prescribed_test.prescribed_test_id

prescribed_test.prescribed_test_id  - report.report_date

diagnostic_test.test_id < prescribed_test.prescribed_test_id 

consultation.consultation_id  < payment.payment_id
 