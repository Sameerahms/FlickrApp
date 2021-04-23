import TimelineItems from './TimelineItems'

const Timeline = ({ items, isLoading }) => {
    return isLoading ? <h1>Loding.....</h1> :<section className='cards'>
        {items.photos.photo.map(item => (

            <TimelineItems item={item}></TimelineItems>
     
        ))}
      </section>
  }
  
  export default Timeline