import PropTypes from "prop-types"; 
import cssModule from './TransactionHistory.module.css'

const TransactionHistory = ({ props }) => {
	return <table className={cssModule['transaction-history']}>
		<thead>
			<tr>
				<th>Type</th>
				<th>Amount</th>
				<th>Currency</th>
			</tr>
		</thead>

		<tbody>
			{
				
				props.map(item => {
					return < tr key={item.id} >
						<td>{item.type}</td>
						<td>{item.amount}</td>
						<td>{item.currency}</td>
					</ tr>

				})
			}
		</tbody>
	</table>
}

TransactionHistory.propTypes = {
	props: PropTypes.array.isRequired
}

export default TransactionHistory


	