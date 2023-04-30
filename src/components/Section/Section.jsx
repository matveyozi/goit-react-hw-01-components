import cssModule from './Section.module.css'

const Section = ({ children }) => {
	return <section className={cssModule.section}>
{children}
	</section>
}

export default Section;