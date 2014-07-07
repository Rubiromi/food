json.array!(@noms) do |nom|
  json.extract! nom, :id
  json.url nom_url(nom, format: :json)
end
