
json.set! "campsite" do
  json.partial! "api/campsites/campsite", campsite: @campsite
end

json.set! "reviews" do
  @campsite.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :campsite_id, :reservation_id, :title, :body, :rating, :created_at
    end
  end
end