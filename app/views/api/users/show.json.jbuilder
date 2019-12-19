json.set! "user" do
  json.partial! "api/users/user", user: @user
end

json.set! "reviews" do
  @user.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :campsite_id, :reservation_id, :title, :body, :rating, :created_at
    end
  end
end