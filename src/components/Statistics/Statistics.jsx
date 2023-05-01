import PropTypes from "prop-types"; 
import cssModule from './Statistics.module.css'
const Statistics = ({title, stats}) => {
	
	return	<div key={stats.join('')} className={cssModule.statistics}>
			<h2 className={title && cssModule.title}>{title}</h2>

			<ul className={cssModule['stat-list']}>
			{stats.map(item => {
				return <li key={item.label} className={cssModule.item}>
						<span className={cssModule.label}>{item.label}</span>
						<span className={cssModule.percentage}>{item.percentage}%</span>
					</li>
				})}
			</ul>
		</div>
	
}

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.array.isRequired
}

export default Statistics;