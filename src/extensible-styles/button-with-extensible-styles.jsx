const Button = ({ name, type, onClick, children, className = 'button primary', style = {} }) => {
  return (
    <button name={name} type={type} onClick={onClick} className={className} style={style}>
      {children}
    </button>
  )
}

export { Button }
