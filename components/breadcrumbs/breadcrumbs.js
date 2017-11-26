const BreadCrumbs = ({page}) =>
	<div className="breadcrumbs">
		<span className="label active">{page}</span>
		<span className="label">All Profiles</span>
		<style jsx>{`
      .breadcrumbs {
      	position: absolute;
      	top: 40px;
      	width: 100%;
        background: #f3f3f3;
        display flex;
        height: 30px;
        align-items: center;
        color: black;
      }
      .label {
      	padding: 0 12px;
      	height: 100%;
      	display: flex;
        align-items: center;
      }
      .active {
      	background: #eaeaea;
      }
    `}</style>
	</div>;

export default BreadCrumbs;