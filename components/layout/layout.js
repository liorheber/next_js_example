import Head from 'next/head'
import dynamic from 'next/dynamic'
import Header from "../header/header";
import BreadCrumbs from "../breadcrumbs/breadcrumbs";

const Mask = dynamic(import("../mask/mask"), {
	ssr: false
});

export default ({children, page, dialogOpen, onDone}) => (
	<div className="viewport">
		<Head>
			<title>Kenshoo Search</title>
			<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800" rel="stylesheet"/>
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
		</Head>
		<div className={dialogOpen ? "masked" : null}>
			<Header/>
			<BreadCrumbs page={page}/>
			{children}
		</div>
		{dialogOpen ? <Mask onDone={onDone}/> : null}
		<style global jsx>{`
      body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
  			font-size: 12px;
  			-webkit-font-smoothing: antialiased;
      	overflow: ${dialogOpen ? "hidden" : "auto"};
      }
      a {
      	text-decoration: none;
      	color: inherit;
      }
      .masked {
        animation-name: mask;
        animation-duration: 1.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      }
      @keyframes mask {
      	0% { filter: blur(0) grayscale(0); }
      	100% { filter: blur(2px) grayscale(100%); }
      }
    `}</style>
	</div>
);