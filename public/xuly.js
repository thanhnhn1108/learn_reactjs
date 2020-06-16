
class Welcome extends React.Component {
    render() {
      return <h1>Thành nè,1 {this.props.name1}</h1>;
    }
  }
ReactDOM.render(
    <div>
        <Welcome  name1="zxcxzc"/>
    </div>
,document.getElementById("root"));