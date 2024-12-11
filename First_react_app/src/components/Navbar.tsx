interface Props{
    cartItemsCount: number
}
export default function Navbar({cartItemsCount}: Props) {
  return (
    <div>Navbar: {cartItemsCount}</div>
  )
}
