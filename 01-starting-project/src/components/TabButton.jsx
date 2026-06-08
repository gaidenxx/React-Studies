/* Props children is a default value for React that will get what is between tags of the 
element that call this function/file */

export default function TabButton({children, onSelect, isSelected}) {
    return <li><button className={isSelected ? "active" : ""} onClick={onSelect}>{children}</button></li>
}