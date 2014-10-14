mo-server
=========

##api

#insert component info

  "/componentinfo"
  
  request:
  
  {
      keyword:'your component name',
      intro:'your component introduction',
      demo:'your component demo',
      verrify:,
      codelink:'git@yourcomponent'
  }
  
  response:
  
  if success
  
  {
      code:200
  }
  
  if error
  
  { 
      code:500,
      msg:'errorreson'
  }
