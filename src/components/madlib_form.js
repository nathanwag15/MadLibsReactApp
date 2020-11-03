import React, {Component} from 'react';
import {
    Col,
    Row
} from 'reactstrap';

class MadlibForm extends Component {

    handleChange = function(props) {
        console.log('trying to handle change');
    }
    render(){
        return(
        <Row style={{textAlign:'center', color: 'white'}} >
            <Col nd="3" className="InputWrapper">
                <Row>
                    <Col nd="2">
                        <label className="greenLabel">1</label>
                    </Col>
                    <Col nd="10">
                        <input placeholder="Color" type="text" onChange={this.handleChange({inputTitle: 'color'})} />  
                    </Col>
                </Row>
                <Row>
                    <Col nd="12">
                        <div className="inputDescription">Color</div>
                    </Col>
                </Row>
            </Col>
            <Col nd="3" className="InputWrapper">
                <Row>
                    <Col nd="2">
                        <label className="greenLabel">1</label>
                    </Col>
                    <Col nd="10">
                        <input placeholder="Noun (Plural)" type="text" onChange={this.handleChange} />  
                    </Col>
                </Row>
                <Row>
                    <Col nd="12">
                        <div className="inputDescription">Noun (Plural)</div>
                    </Col>
                </Row>
            </Col>
            <Col nd="3" className="InputWrapper">
                <Row>
                    <Col nd="2">
                        <label className="greenLabel">1</label>
                    </Col>
                    <Col nd="10">
                        <input placeholder="Adjective" type="text" onChange={this.handleChange}/>  
                    </Col>
                </Row>
                <Row>
                    <Col nd="12">
                        <div className="inputDescription">Adjective</div>
                    </Col>
                </Row>
            </Col>
            <Col nd="3" className="InputWrapper">
                <Row>
                    <Col nd="2">
                        <label className="greenLabel">1</label>
                    </Col>
                    <Col nd="10">
                        <input placeholder="Celebrity" type="text" onChange={this.handleChange}/>  
                    </Col>
                </Row>
                <Row>
                    <Col nd="12">
                        <div className="inputDescription">Celebrity</div>
                    </Col>
                </Row>
            </Col>
        </Row>
        )
    }
}

export default MadlibForm;