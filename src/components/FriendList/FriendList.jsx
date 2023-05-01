import PropTypes from "prop-types"; 
import cssModule from "./FriendList.module.css";
import FriendListItem from '../FriendListItem/FriendListItem'
const FriendList = ({friends}) => {
return 	<ul key={'FriendList'} className={cssModule['friend-list']}>
		{friends.map(item=> {
			return <FriendListItem key={item.id} id={item.id}
				isOnline = { item.isOnline }
				avatar = { item.avatar }
				name={item.name}></FriendListItem>
		})}
	</ul>
}
FriendList.propTypes = {
	friends: PropTypes.array.isRequired
}
export default FriendList;