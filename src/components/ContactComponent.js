import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors} from 'react-redux-form';
import { Link } from 'react-router-dom';
import axios from 'axios';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /*     handleChange = async (values) => {
            const address = await axios.get(`https://viacep.com.br/ws/${values.cep}/json/`);
            console.log(address);
            this.props.change('endereco', address.data.logradouro);
        } */
      

    handleSubmit = async (values) => {
        const user = await axios.post('http://localhost:5000/register', values);
        if (user.status === 200) {
            alert('Cadastro realizado!!!');
        } else {
            alert('Cadastro não realizado.');
        }

        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

     
    render() {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contate-nos</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Dados Pessoais</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 col-md-9">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="nome" md={2}>Nome</Label>
                                <Col md={10}>
                                    <Control.text model=".nome" id="nome" name="nome"
                                        placeholder="Nome Completo"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".nome"
                                        show="touched"
                                        messages={{
                                            required: 'Campo obrigatório'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="cargo" md={2}>Cargo</Label>
                                <Col md={10}>
                                    <Control.text model=".cargopretendido" id="cargo" name="cargo"
                                        placeholder="Cargo Pretendido"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="estadocivil" md={2}>Estado Civil</Label>
                                <Col md={4}>
                                    <Control.select model=".estadocivil" name="estadocivil"
                                        className="form-control">
                                        <option value="Solteiro(a)">Solteiro(a)</option>
                                        <option value="Casado(a)">Casado(a)</option>
                                        <option value="Separado(a">Separado(a</option>
                                        <option value="Divorciado(a)">Divorciado(a)</option>
                                        <option value="Viuvo(a)">Viuvo(a)</option>
                                    </Control.select>
                                </Col>
                                <Label htmlFor="sexo" md={1}>Sexo</Label>
                                <Col md={2}>
                                    <Control.select model=".sexo" name="sexo"
                                        className="form-control">
                                        <option>F</option>
                                        <option>M</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="dtnascimento" md={2}>Dt. Nascimento</Label>
                                <Col md={3}>
                                <Control.text model=".dtnascimento" id="dtnascimento" name="dtnascimento"
                                        placeholder="01012001"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".dtnascimento"
                                        show="touched"
                                        messages={{
                                            required: 'Campo obrigatório',
                                        }}
                                    />
                                </Col>   
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="endereco" md={2}>Endereço</Label>
                                <Col md={10}>
                                    <Control.text model=".endereco" id="endereco" name="endereco"
                                        placeholder="ex:. Nome da Rua, 56. Bloco 2, AP 301"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".endereco"
                                        show="touched"
                                        messages={{
                                            required: 'Campo obrigatório'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="bairro" md={2}>Bairro</Label>
                                <Col md={6}>
                                    <Control.text model=".bairro" id="bairro" name="bairro"
                                        placeholder="Bairro"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".bairro"
                                        show="touched"
                                        messages={{
                                            required: 'Campo obrigatório'
                                        }}
                                    />
                                </Col>
                                <Label htmlFor="cep" md={1}>CEP</Label>
                                <Col md={3}>
                                    <Control.text model = ".cep" id = "cep" name = "cep"
                                        placeholder = "00000000"
                                        className = "form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="cidade" md={2}>Cidade</Label>
                                <Col md={6}>
                                    <Control.text model=".cidade" id="cidade" name="cidade"
                                        placeholder="Cidade"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".cidade"
                                        show="touched"
                                        messages={{
                                            required: 'Campo obrigatório'
                                        }}
                                    />
                                </Col>
                                <Label htmlFor="celular" md={1}>Celular</Label>
                                <Col md={3}>
                                    <Control.text model=".celular" id="celular" name="celular"
                                        placeholder="999999999"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(9), maxLength: maxLength(9), isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".celular"
                                        show="touched"
                                        messages={{
                                            isNumber: 'Formato errado'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Telefone Fixo.</Label>
                                <Col md={4}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Fixo 1"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            isNumber: 'Formato errado'
                                        }}
                                     />
                                </Col>
                                <Col md={4}>
                                    <Control.text model=".telnum2" id="telnum2" name="telnum2"
                                        placeholder="Tel. Fixo 2"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum2"
                                        show="touched"
                                        messages={{
                                            isNumber: 'Formato errado'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Campo obrigatório',
                                            validEmail: 'Email inválido'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="identidade" md={2}>Identidade</Label>
                                <Col md={5}>
                                    <Control.text model=".identidade" id="identidade" name="identidade"
                                        placeholder="RG"
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".identidade"
                                        show="touched"
                                        messages={{
                                            required: 'Campo obrigatório',
                                        }}
                                     />
                                </Col>
                                <Label htmlFor="CPF" md={1}>CPF</Label>
                                <Col md={4}>
                                    <Control.text model=".cpf" id="cpf" name="cpf"
                                        placeholder="00000000000"
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".cpf"
                                        show="touched"
                                        messages={{
                                            required: 'Campo obrigatório',
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="veiculo" md={2}>Possui Veículo</Label>
                                <Col md={2}>
                                    <Control.select model=".veiculo" name="veiculo"
                                        className="form-control">
                                        <option>Sim</option>
                                        <option>Não</option>
                                    </Control.select>
                                </Col>
                                <Label htmlFor="habilitacao" md={2}>Habilitação</Label>
                                <Col md={2}>
                                    <Control.select model=".habilitacao" name="habilitacao"
                                        className="form-control">
                                        <option>Sim</option>
                                        <option>Não</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary" className="btn pull-right" >
                                        Enviar
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );

    }

}

export default Contact;