export default () =>
	<div className="tabs">
		<div className="tab active">Profiles</div>
		<div className="tab">Portfolios</div>
		<div className="tab">Campaigns</div>
		<div className="tab">Ad Groups</div>
		<style jsx>{`
		.tabs {
			margin-top: 140px;
			margin-bottom: 10px;
			border-bottom: 1px solid #d8d8d8;
			background-image: -webkit-linear-gradient(top,#fff,#f4f4f4);
			padding: 0 0 0 20px
			display: flex;
			flex: 1;
			min-height: 30px;
			max-height: 30px;
			align-items: center
			color: #666;
			z-index: 30;
		}
		.tab {
			position: relative;
			bottom: 0px;
			border-top: 1px solid transparent
			border-left: 1px solid transparent
			border-right: 1px solid transparent
			padding: 8px 18px;
			cursor: pointer;
		}

		.tab:hover {
			color: black;
		}

		.active {
			border-top: 1px solid #d8d8d8
			border-left: 1px solid #d8d8d8
			border-right: 1px solid #d8d8d8
			background: white;
			color: black;
		}
		`}</style>
	</div>