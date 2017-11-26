import dynamic from "next/dynamic";

import {LinearProgress} from 'material-ui/Progress';

const Table = ({columns = [], rows = [], isLoading = false}) => (
	<div className="table">
		<div className="header_row">
			{columns.map(column => <div className="header" key={column}>{column}</div>)}
		</div>
		{isLoading ? <LinearProgress /> : null}
		<div className={"rows"}>
			{rows.map((row,index) =>
				<div key={`row-${index}`} className="row">
					{row.map((cell, index) =>
						<div key={`cell-${row}-${index}`} className="cell">{cell}</div>
					)}
				</div>
			)}
		</div>
		<style jsx>{`
      .table {
    		display: flex;
    		left: 0;
    		right: 0;
    		z-index: 1;
    		border-top: 1px solid #ddd;
    		flex-direction: column;
      }
      .header_row {
      	display: flex;
      	max-height: 52px;
      	min-height: 52px;
      	flex: 1;
  			box-shadow: 0px 10px 10px -10px rgba(0,0,0,0.22);
  			position: sticky;
  			top: 40px;
  			background: rgba(255,255,255,0.90);
  			z-index: 20;
      }
      .rows {
      	display: flex;
      	flex: 1;
      	flex-direction: column;
  			position: relative;
  			z-index: 10;
      }
      .row {
      	display: flex;
      	flex: 1;
      	max-height: 72px;
      	min-height: 72px;
    		border-bottom: 1px solid #ddd;
    		flex-direction: row;
      }
      .row :hover {
      	background: #f3f3f3;
      }
      .cell {
      	display: flex;
      	flex: 1;
      	align-items: center;
      	padding: 0 12px;
      	word-break: break-word;
      }
      .header {
      	display: inline-flex;
      	padding: 0 12px;
      	flex: 1;
      	align-items: center;
      	border-bottom: 1px solid #ddd;
      	border-right: 1px solid transparent;
  			transition: border 250ms ease-in-out;
      }
      .header_row:hover .header{
      	border-right: 1px solid #ddd;
      }
      `}</style>
	</div>
);

export default Table;