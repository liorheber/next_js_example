import Menu from "../menu/menu";

const Header = () => {
	return (
		<div>
			<div className="header">
				<div className="logo"/>
				<ul>
					<Menu label={"Analysis"} link="/" active/>
					<Menu label={"Management"} link="/" hasDropdown actions={["Scheduled Actions", "Dimensions", "Negative Keywords", "Campaign Mirroring", "Objectives", "Watchdog", "Channel Direct"]}/>
					<Menu label={"Optimization"} link="/" hasDropdown actions={["Halogen Inform", "Halogen Forsee", "Kenshoo Plan (Beta)"]}/>
					<Menu label={"Reports"} link="/reports" hasDropdown actions={["Dashboards", "Scheduled Reports", "Channel Performance"]}/>
					<Menu label={"Administration"} link="/" hasDropdown actions={["User Management", "Channel Management"]}/>
					<Menu label={"Help"} link="/" hasDropdown actions={["Help on This Page", "Help Topics", "KenshooU"]}/>
					<Menu label={"Kenshoo Admin"} link="/" hasDropdown actions={["Control Panel", "System Processes", "System Scheduler", "User Feature Management"]}/>
				</ul>
			</div>
			<style jsx>{`
      .header {
      	position: fixed;
      	width: 100%;
      	top: 0;
        background-image: -webkit-linear-gradient(left,#2caf82 5%,#0caee2 97%);
        display flex;
        height: 40px;
        align-items: center;
        color: white;
    		z-index: 100;
      }
      .logo {
      	background-image: url('https://cdn.kenshoo.com/resources/logos/kenshoo-search-logo.svg');
  			background-repeat: no-repeat;
  			width: 152px;
  			height: 100%;
  			margin: 0 40px 0 12px;
      }
      ul {
      	list-style-type: none;
    		margin: 0;
    		padding: 0;
    		display: flex;
    		height: 100%;
    		align-items: center;
      }
    `}</style></div>

	)
};

export default Header;
