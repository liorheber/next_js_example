import React, {PureComponent} from 'react';
import axios from "axios";
import Layout from "../components/layout/layout";
import Table from "../components/table/table";
import Tabs from "../components/tabs/tabs";
import Actions from "../components/actions/actions";

class Analysis extends PureComponent {
	constructor(props) {
		super(props);
		this.openDialog = this.openDialog.bind(this);
		this.closeDialog = this.closeDialog.bind(this);
		this.refresh = this.refresh.bind(this);
		this.refreshDone = this.refreshDone.bind(this);
		this.state = {
			dialogOpen: false,
			isLoading: false
		}
	}

	static async getInitialProps({req}) {
		const columns = await axios.get('http://www.mocky.io/v2/5a16ef6b310000bf388d34c8');
		const rows = await axios.get('http://www.mocky.io/v2/5a17c28f2c00008112596bf8');
		return {columns: columns.data, rows: rows.data};
	}

	openDialog() {
		this.setState({dialogOpen: true})
	}

	closeDialog() {
		this.setState({dialogOpen: false})
	}

	refresh() {
		this.setState({isLoading: true});
		setTimeout(this.getNewData.bind(this), 3000);
	}

	refreshDone() {
		this.setState({isLoading: false});
	}

	async getNewData() {
		const rows = await axios.get('http://www.mocky.io/v2/5a17c1f22c00004312596bf6');
		this.setState({ serverRows: rows.data});
		this.refreshDone();
	}

	render() {
		const {columns = [], rows = []} = this.props;
		const {dialogOpen, isLoading, serverRows} = this.state;
		return (
			<Layout page="ANALYSIS"
							dialogOpen={dialogOpen}
							onDone={this.closeDialog}>
				<Tabs />
				<Actions key="actions"
								 onCreate={this.openDialog}
								 refresh={this.refresh}/>
				<Table columns={columns}
							 rows={serverRows || rows}
							 isLoading={isLoading}/>
			</Layout>
		);
	}
}

export default Analysis;