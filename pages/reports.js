import React, {PureComponent} from 'react';
import Layout from "../components/layout/layout";
import Table from "../components/table/table";
import Actions from "../components/actions/actions";

class Reports extends PureComponent {
	render() {
		return (
			<Layout page="REPORTS">
				<div className="image_wrapper">
					<img src="https://news.nationalgeographic.com/content/dam/news/photos/000/641/64137.jpg" className="image"/>
				</div>
				<style jsx>{`
					.image_wrapper {
						display: flex;
					}
					.image {
						width: 100%;
					}
					`}</style>
			</Layout>
		);
	}
}


export default Reports;