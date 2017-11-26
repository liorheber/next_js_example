import Link from "next/link";

const Menu = ({label, hasDropdown, active, actions = [], link}) => {
	return (
		<span>
			<li className={active ? "active" : null}>
				<span className="label">{!hasDropdown ? <Link href={link}><span>{label}</span></Link> : label}</span>
				{hasDropdown ? <span className="fa fa-angle-down dropdown"/> : null}
				{hasDropdown ?
					<ul>
						{actions.map(action => <li key={action}><Link href={link}><span>{action}</span></Link></li>)}

					</ul> : null }
			</li>
			<style jsx>{`
      li {
    		display: flex;
      	align-items: center;
      	height: 100%;
      	cursor: pointer;
      }
      li :hover {
      	background-color: rgba(0,0,0,0.2);
      }
      .active {
      	background-color: rgba(0,0,0,0.2);
      }
     	.dropdown {
     		margin: 0 14px 0 0;
     	}
     	.label {
      	padding: 0 14px;
     	}
     	span {
     		display: flex;
     		height: 100%;
      	align-items: center;
     	}
     	ul {
     		list-style-type: none;
     		margin: 0;
    		padding: 0;
    		position: absolute;
    		top: 40px;
    		background: white;
    		display:none;
    		box-shadow: 0 3px 5px rgba(0,0,0,0.18);
     	}
     	ul li {
     		height: 30px;
     		padding: 0 14px;
     		color: #666666 !important;
     	}
     	li :hover ul {
     		display: block;
     	}
     	li ul li:hover {
      	background-color: #dff8e5;
     		color: #333333 !important;
     	}
    `}</style>
		</span>

	)
};

export default Menu;
