@watchlists.each do |watchlist|
  json.watchlists do 
    json.set! watchlist.id do 
      json.partial! 'watchlist', watchlist: watchlist 
    end
  end
end