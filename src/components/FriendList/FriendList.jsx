import PropTypes from "prop-types"; 

const FriendList = ({ children }) => {
return 	<ul key={'FriendList'} className="friend-list">
		{children}
	</ul>
}
FriendList.propTypes = {
	children: PropTypes.node.isRequired
}
export default FriendList;