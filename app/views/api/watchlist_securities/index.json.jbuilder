@watchlists.each do |watchlist_security|
  json.set! watchlist_security.security_id do 
    #json.partial! 'api/watchlists/watchlist', watchlist_security: watchlist_security 
    json.user watchlist_security.godsend_id
  end
end

@securities.each do |security|
  json.set! security.id do 
    json.partial! 'api/securities/security', security: security
  #json.security security.watchlist_securities
  end
end 



#@watchlists.each do |watchlist_security|
 # @securities.each do |security|
  #  json.set! watchlist_security.id do 
      #json.partial! 'api/watchlists/watchlist', watchlist_security: watchlist_security 
   #   json.partial! 'api/securities/security', security: security 
    #end
  #end 
#end