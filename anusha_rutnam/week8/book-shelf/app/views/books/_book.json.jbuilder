json.extract! book, :id, :title, :plot, :author, :created_at, :updated_at
json.url book_url(book, format: :json)
