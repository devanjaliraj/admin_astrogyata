import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  CustomInput,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import draftToHtml from "draftjs-to-html";
import swal from "sweetalert";
export class AddBookEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event_list: "",
      price_online: "",
      price_offline: "",
      desc: "",
      editorState: EditorState.createEmpty(),
    };
    this.state = {
      eventN: [],
    };
  }
  uploadImageCallBack = (file) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.imgur.com/3/image");
      xhr.setRequestHeader("Authorization", "Client-ID 7e1c3e366d22aa3");
      const data = new FormData();
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  // changeHandler1 = (e) => {
  //   this.setState({ status: e.target.value });
  // };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  async componentDidMount() {
    axiosConfig
      .get("/admin/EventListAdmin")
      .then((response) => {
        console.log(response);
        this.setState({
          eventN: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post("/admin/admin_Addevent", this.state)

      .then((response) => {
        console.log(response.data);

        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/event/bookEvent/bookEventList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Add Book Event"
          breadCrumbParent=" home"
          breadCrumbActive="Add Book Event"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Book Event
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/event/bookEvent/bookEventList")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label> Pooja Type</Label>
                  <CustomInput
                    required
                    type="select"
                    name="event_list"
                    placeholder="Enter Title"
                    value={this.state.event_list}
                    onChange={this.changeHandler}
                  >
                    <option>select Event</option>
                    {this.state.eventN?.map((allEvent) => (
                      <option value={allEvent?._id} key={allEvent?._id}>
                        {allEvent?.event_name}
                      </option>
                    ))}
                  </CustomInput>
                </Col>

                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Name of Pooja </Label>
                  <Input
                    required
                    type="text"
                    name="price_online"
                    placeholder="Enter Price Online"
                    value={this.state.price_online}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Duration</Label>
                  <Input
                    required
                    type="text"
                    name="price_offline"
                    placeholder="Enter Price Offline"
                    value={this.state.price_offline}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="12" md="12" sm="12" className="mb-2">
                  <Label>About puja</Label>

                  <br />

                  <Editor
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                      inline: { inDropdown: true },
                      list: { inDropdown: true },
                      textAlign: { inDropdown: true },
                      link: { inDropdown: true },
                      history: { inDropdown: true },
                      image: {
                        uploadCallback: this.uploadImageCallBack,
                        previewImage: true,
                        alt: { present: true, mandatory: true },
                      },
                    }}
                  />
                </Col>
                <Col lg="6" md="6" sm="12" className="mb-2">
                  <Label>Benefits</Label>
                  <Input
                    required
                    type="text"
                    name="category"
                    placeholder="Enter Category"
                    // value={this.state.category}
                    // onChange={this.changeHandler}
                  ></Input>
                </Col>
              </Row>

              {/* <Col lg="6" md="6" sm="6" className="mb-2">
                <Label className="mb-1">Status</Label>
                <div
                  className="form-label-group"
                  onChange={(e) => this.changeHandler1(e)}
                >
                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    value="Active"
                  />
                  <span style={{ marginRight: "20px" }}>Active</span>

                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    value="Inactive"
                  />
                  <span style={{ marginRight: "3px" }}>Inactive</span>
                </div>
              </Col> */}
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Save
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddBookEvent;
