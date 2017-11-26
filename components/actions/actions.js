export default ({onCreate, refresh}) =>
	<div className="actions">
		<span onClick={onCreate}>Create</span>
		<span onClick={refresh}>Refresh</span>
		<style jsx>{`
		.actions {
			position: sticky;
			top: 0;
			display: flex;
			flex: 1;
			min-height: 30px;
			max-height: 30px;
			background: #21af9d;
			align-items: center
			color: white;
			z-index: 30;
		}
		span {
			padding: 0 14px;
			border-right: 1px solid #079c88;
			display: flex;
    	height: 30px;
    	align-items: center;
    	cursor: pointer;
		}
		span :hover {
			background: #079c88;
		}
		`}</style>
	</div>