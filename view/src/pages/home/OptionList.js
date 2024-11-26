import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OptionList = ({ children }) => {
    return ( 
        <button className="border-2 border-white p-5">{children}<FontAwesomeIcon icon="fa-solid fa-angle-down" /></button>
     );
}
 
export default OptionList;