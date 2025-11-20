const Button = ({ name, type, onClick, children }) => {
  return (
    <button name={name} type={type} onClick={onClick} className='button primary'>
      {children}
    </button>
  )
}

export { Button }
