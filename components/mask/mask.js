import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

export default ({onDone}) =>
	<div className="mask">
		<div className="dialog">
			<div className="form_wrapper">
				<TextField
					fullWidth
					label="Profile Name"
					margin="normal"
				/>

				<TextField
					fullWidth
					label="Billing Account"
					margin="normal"
				/>
			</div>
			<div className="buttons">
				<Button onClick={onDone}>Cancel</Button>
				<Button onClick={onDone} raised color="primary">Create</Button>
			</div>
		</div>
		<style global jsx>{`
      .mask {
        position: fixed;
        z-index: 99999;
  			top: 0px;
  			left: 0;
  			width: 100%;
  			height: 100%;
        background: rgba(0,0,0,0.65);
      }
      .dialog {
      	background: white;
      	position: fixed;
  			top: 50%;
  			left: 50%;
  			transform: translate(-50%, -50%);
  			min-width: 400px;
  			box-shadow: 0px 0 30px 15px rgba(0,0,0,0.22);
      }
      .buttons {
      	padding: 14px;
      	border-top: 1px solid #ddd;
    		display: flex;
        justify-content: space-between;
      }
      .form_wrapper {
      	padding: 14px;
      }
    `}</style>
	</div>