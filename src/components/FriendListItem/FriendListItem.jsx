import PropTypes from "prop-types"; 

const FriendListItem = ({props}) => {
	return props.map(item => {
		return <li key = {item.id} className="item">
			<span className={item.isOnline ? "online" : "offline"}></span>
			<img className="avatar" src={item.avatar} alt='' width="48" />
			<p className="name">{item.name}</p>
		</li>
	})
}

FriendListItem.propTypes = {
	props: PropTypes.array.isRequired
}
export default FriendListItem;