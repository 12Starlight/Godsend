@watchlists.each do |watchlist_security|
  json.set! watchlist_security.id do 
    # json.partial! 'api/watchlists/watchlist', watchlist_security: watchlist_security 
    json.securities watchlist_security
  end
end