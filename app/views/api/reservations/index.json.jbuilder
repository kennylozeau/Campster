@reservations.each do |reservation|
  json.set! reservation.id do
    json.partial! 'reservation', reservation: reservation
  end
end