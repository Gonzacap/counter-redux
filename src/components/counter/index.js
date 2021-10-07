import { deposit, withdraw } from "../../store/amount/action";
import { connect } from "react-redux";
import { slectCurrentAmount } from "../../store/amount/reducer";

const mapStateToProps = (state) =>{
    return {
        amount: slectCurrentAmount(state)
    };
};

const Counter = ({ amount, deposit, withdraw }) => {
    return (
        <div>
            <h1>{amount}</h1>
            <button onClick={ () => deposit() } >Deposit $10</button>
            <button onClick={ () => withdraw() } >Whitdraw $10</button>
        </div>
    );
};

export default connect(mapStateToProps, { deposit, withdraw })(Counter);