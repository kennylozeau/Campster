@campsites.each do |campsite|
  json.set! campsite.id do
    json.partial! 'campsite', campsite: campsite
  end
end