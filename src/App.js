import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import Timeline from './components/ui/Timeline'
import Search from './components/ui/Search'
import Uplode from './components/ui/Uplode'



function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [searchItems, setSearchItems] = useState([])
  const [query, setQuery] = useState(' ')

  const fileSelectedHandler = event => {
    console.log(event.target.files[0])
  }

  useEffect(() => {
    const fetchItems = async () => {

      setIsLoading(true)
      const result = await axios(
         `https://www.flickr.com/services/rest/?method=flickr.photos.getContactsPhotos&api_key=f3aeba8e35ef36892a34fbc218f5c1b2&format=json&nojsoncallback=1&auth_token=72157719010098907-2bfb71ee5be92d64&api_sig=5cbcb40de17f6d2f68e5ac05a9a381df`)
       console.log(result.data)
       
      //  var obj = JSON.parse(result)
      //  console.log(obj.page)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  useEffect(() => {
    const fetchItems = async () => {

      setIsLoading(true)
      const searchResult = await axios(
         `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=78791538e0328f7b6276a3701d1d47f6&tags=${query}&format=json&nojsoncallback=1`)
  
      setSearchItems(searchResult.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])


if(query === ' '){
  return (
    <div className="App">
      <Header/>
     <div>
      <Search getQuery = {(q) => setQuery(q)} /> 
     <Timeline isLoading={isLoading} items={items}/>
     </div>
    </div>
  );

}else{
  return (
    <div className="App">
      <Header/>
     <div>
    <Search getQuery = {(q) => setQuery(q)} />
     <Timeline isLoading={isLoading} items={searchItems}/>

     </div>
    </div>
  );
}
}

export default App;
