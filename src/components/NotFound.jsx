import '../assets/styles/NotFound.css';

const NotFound = (props) => {
  return (
    <div className="wrapper">
        <p className='oops'>Oops...</p>
        <p className='not-found'>{props.message}</p>
    </div>
  )
}

export default NotFound