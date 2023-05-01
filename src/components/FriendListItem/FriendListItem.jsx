import PropTypes from "prop-types"; 
import cssModule from './FriendListItem.module.css'
// const FriendListItem = ({props}) => {
// 	return props.map(item => {
// 		return <li key = {item.id} className={cssModule.item}>
// 			<span className={item.isOnline ? cssModule.online : cssModule.offline}></span>
// 			<img className={cssModule.avatar} src={item.avatar} alt='' width="48" />
// 			<p className={cssModule.name}>{item.name}</p>
// 		</li>
// 	})
// }
const FriendListItem = ({ id,
isOnline,
avatar,
name }) => {
	
		return <li className={cssModule.item}>
			<span className={isOnline ? cssModule.online : cssModule.offline}></span>
			<img className={cssModule.avatar} src={avatar} alt='' width="48" />
			<p className={cssModule.name}>{name}</p>
		</li>
	
}

FriendListItem.propTypes = {
	id: PropTypes.number.isRequired,
	isOnline: PropTypes.bool.isRequired,
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
}
export default FriendListItem;