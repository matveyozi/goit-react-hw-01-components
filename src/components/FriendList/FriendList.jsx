import PropTypes from "prop-types"; 
import cssModule from "./FriendList.module.css";
const FriendList = ({ children }) => {
return 	<ul key={'FriendList'} className={cssModule['friend-list']}>
		{children}
	</ul>
}
FriendList.propTypes = {
	children: PropTypes.node.isRequired
}
export default FriendList;