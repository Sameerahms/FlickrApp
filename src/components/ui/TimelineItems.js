import React from 'react'

const TimelineItems = ({item}) => {
    var srcPath = 'https://farm'+item.farm+'.staticflickr.com/'+item.server+'/'+item.id+'_'+item.secret+'.jpg'
    // console.log(srcPath)

  return ( 
    <div className='card'>
          <h1>{item.title}</h1>
          
        <div className='card-inner'>
         <div className='card-front'>
            <img src={srcPath} alt='name' />
         </div>
        </div>
  </div>    
 )
}


export default TimelineItems