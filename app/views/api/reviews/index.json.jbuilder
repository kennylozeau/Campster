@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :campsite_id, :reservation_id, :title, :body, :rating, :created_at
  end
end