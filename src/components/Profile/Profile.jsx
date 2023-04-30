import PropTypes from "prop-types"; 
import cssModule from './Profile.module.css'

const Profile = ({
	username, 
	tag, 
	location, 
	avatar,
	stats
}) => {
	return	<div key={username} className={cssModule.profile}>
		<div className={cssModule.description}>
			<img
				src={avatar}
				alt="User avatar"
				className={cssModule.avatar}
			/>
			<p className={cssModule.name}>{username}</p>
			<p className={cssModule.tag}>@{ tag }</p>
			<p className={cssModule.location}>{location}</p>
		</div>

		<ul className={cssModule.stats}>
			<li>
				<span className={cssModule.label}>Followers</span>
				{<span className={cssModule.quantity}>{stats.followers}</span>}
			</li>
			<li>
				<span className={cssModule.label}>Views</span>
				<span className={cssModule.quantity}>{stats.views}</span>
			</li>
			<li>
				<span className={cssModule.label}>Likes</span>
				<span className={cssModule.quantity}>{stats.likes}</span>
			</li>
		</ul>
	</div>
}

Profile.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	stats: PropTypes.object.isRequired
}

export default Profile