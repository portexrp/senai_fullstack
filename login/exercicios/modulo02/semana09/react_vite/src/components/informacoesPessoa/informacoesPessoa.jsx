import PropTypes from 'prop-types';
import './informacoesPessoa.css'

const InformacoesPessoa = (props) => {
    return (
        <div className='container alert alert-warning'>
            <h1>
                Olá, marujo <strong>{props.nome}</strong>, <strong>tenho</strong> {props.idade} anos e gosto de <strong>{props.hobbie}</strong>.
            </h1>
        </div>
    )

};

InformacoesPessoa.propTypes = {
    nome: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    hobbie: PropTypes.string
};

export default InformacoesPessoa