import PropTypes from "prop-types"; 

const Statistics = ({title, stats}) => {
	
	return	<section key={stats.join('')} className="statistics">
			<h2 className="title">{title}</h2>

			<ul className="stat-list">
			{stats.map(item => {
				return <li key={item.label} className="item">
						<span className="label">{item.label}</span>
						<span className="percentage">{item.percentage}%</span>
					</li>
				})}
			</ul>
		</section>
	
}

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.array.isRequired
}

export default Statistics;