import './styles.css';
const Card = ({title, children, onClick, background}) => {
  return (
    <div className="card" onClick={onClick} style={{background}}>
      {title && <h4>{title}</h4>}
      <div>
        {children}
      </div>
    </div>
  )
}

export default Card;