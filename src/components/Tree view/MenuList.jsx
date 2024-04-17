import MenuItem from "./MenuItem"

const MenuList = ({list = []}) => {
  return (
    <ul className='menu-list-container'>{
        list && list.length? list.map((listItem,i) => <MenuItem key={i} item={listItem}/>) :null
        }</ul>
  )
}

export default MenuList