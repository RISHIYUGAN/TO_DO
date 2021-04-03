import React, { useState, useEffect, Fragment } from "react";
import tick from "../../../Assets/images/tick.png";
import "./dashboard.css";
import axios from "axios"
import { UnderLine } from "../../utility/underline";
import { connect } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import moment from "moment";
import { da } from "date-fns/locale";

const Dashboard = (props) => {
  const [personal, setPersonal] = useState(props.personal);
  const [personalworklist, setPersonalworklist] = useState([
    // { content: "eat", completed: false },
    // { content: "sleep", completed: false },
    // { content: "rule", completed: true },
    // { content: "conquer", completed: true },
  ]);
  const [Professionalworklist, setProfessionalworklist] = useState([
    // { content: "do my application", completed: false },
    // { content: "test my application", completed: false },
    // { content: "finish my application", completed: true },
  ]);
  const [randomcolor, setRandomcolor] = useState([
    "red",
    "skyblue",
    "blue",
    "pink",
    "green",
    "yellow",
    "orange",
    "violet",
    "lightgreen",
  ]);
  const [psnlpercentage, setPsnlPercentage] = useState(0);
  const [prfsnpercentage, setPrfsnPercentage] = useState(0);
  const [psnlsts, setPsnlsts] = useState(0);
  const [prfsnsts, setPrfsnsts] = useState(0);

  let pests = 0;
  let prsts = 0;
  useEffect(() => {
    console.log("runningd");
    console.log(moment().format('DD/MM/YYYY'))
    axios
      .post("http://localhost:3000/activity", {
        token: localStorage.getItem("tok"),
        type: props.personal?"personal":"professional",
        date:moment().format('DD/MM/YYYY')
      })
      .then((res)=>{
        console.log(res.data)
        if(res.data.type==="personal"){
          setPersonalworklist(res.data.dailyactivity)
        }
        else{
          setProfessionalworklist(res.data.dailyactivity)
        }
      }
      )
  }, []);
  useEffect(() => {
    {
      personalworklist.map((work) => {
        work.completed === true && pests++;
      });
    }
    {
      Professionalworklist.map((work) => {
        work.completed === true && prsts++;
      });
    }
    setPsnlsts(pests);
    setPrfsnsts(prsts);
    setPsnlPercentage(Math.round((pests / personalworklist.length) * 100));
    console.log("run run pests");
    console.log(pests);
    setPrfsnPercentage(Math.round((prsts / Professionalworklist.length) * 100));
    console.log("run run prsts");
    console.log(prsts);
  }, []);

  let i = 0;
  const randomclrfun = (index) => {
    if (i > randomcolor.length - 1) {
      i = 0;
    }
    var ret = randomcolor[i];
    i++;
    return ret;
  };
  const submitting = (e) => {
    e.preventDefault();
    // console.log(e.target.test.value);
    // const value = e.target.test.value;
    // let update=null;
    // if(props.personal===true){
    // update=[{content:e.target.test.value,completed:false},...personalworklist]
    // }
    // else{
    //    update=[{content:e.target.test.value,completed:false},...Professionalworklist]
    // }
    // console.log(update)
    axios
      .post("http://localhost:3000/update_todo", {
        token: localStorage.getItem("tok"),
        dailyactivity:e.target.test.value,
        type: props.personal?"personal":"professional",
        date:moment().format('DD/MM/YYYY')
      })
      .then((res) => {
        console.log("response:", res.data);
        if(res.data.type==="personal"){
          setPersonalworklist(res.data.activities)
        }
        else{
          setProfessionalworklist(res.data.activities)
        }
        // setWorklist([{content:e.target.test.value,completed:false},...worklist])
        e.target.test.value = "";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const personalcomplete = (index, e) => {
      if(e.target.innerHTML==="Mark as done"){
      //  const update=[...personalworklist]
      //  update[index].completed=true;
      //  update.splice(personal.length,0,personal[index])
      //  update.splice(index,1)
      
      const update = [...personalworklist];
      update[index].completed = true;
      update.splice(personalworklist.length, 0, personalworklist[index]);
      update.splice(index, 1);
      axios
      .post("http://localhost:3000/mark", {
        token: localStorage.getItem("tok"),
        dailyactivity:update,
        type:props.personal?"personal":"professional",
        date:moment().format('DD/MM/YYYY')
      }).then((res)=>{
        console.log("res",res.data)
        res.data.type==="personal"?
        setPersonalworklist(res.data.activities):
        setProfessionalworklist(res.data.activities)
        pests = 0;
        {
          update.map((work) => {
            work.completed === true && pests++;
          });
        }
        setPsnlsts(pests);
        setPsnlPercentage(Math.round((pests / update.length) * 100));
        })
      }
  };
  const completeprofessional = (index, e) => {
    const update = [...Professionalworklist];
    update[index].completed = true;
    update.splice(Professionalworklist.length, 0, Professionalworklist[index]);
    update.splice(index, 1);
    setProfessionalworklist(update);
    prsts = 0;
    {
      update.map((work) => {
        work.completed === true && prsts++;
      });
    }
    setPrfsnsts(prsts);
    setPrfsnPercentage(Math.round((prsts / update.length) * 100));
  };

  const prfsdelete = (index) => {
    console.log(index);
    const copy = [...Professionalworklist];
    copy.splice(index, 1);
    setProfessionalworklist(copy);
    prsts = 0;
    {
      copy.map((work) => {
        work.completed === true && prsts++;
      });
    }
    setPrfsnsts(prsts);
    setPrfsnPercentage(Math.round((prsts / copy.length) * 100));
  };

  const personaldelete = (index) => {
    console.log(index);
    const copy = [...personalworklist];
    copy.splice(index, 1);
    setPersonalworklist(copy);
    pests = 0;
    {
      copy.map((work) => {
        work.completed === true && pests++;
      });
    }
    setPsnlsts(pests);
    setPsnlPercentage(Math.round((pests / copy.length) * 100));
  };

  return (
    <div className="dashboardContainer">
      <div className="flexBox">
        <div className="dashTitle">
          <div>
            <h5>
            Your Works
            </h5>
            <UnderLine backgroundColor="red" />
          </div>
        </div>
        {props.personal ? (
          <Fragment>
            <div className="dashSubtitle">
              <div className="subText">Personal</div>
              <div className="line"></div>
            </div>
            {/* {personalworklist.map((work) => {     
                    work.completed === true && 
                    pests++;
                })} */}
            <div className="statusDiv">
              <div className="completed">
                <CircularProgressbar
                  styles={{
                    root: { width: "45px", height: "45px", fontSize: "100px" },
                    text: {
                      fontSize: "28px",
                      fill: "green",
                    },
                  }}
                  strokeWidth="15"
                  value={psnlpercentage}
                  text={`${psnlpercentage}%`}
                  className="progress"
                />

                <text>
                  completed:
                  <text style={{ color: "red", fontFamily: "poppins" }}>
                    {" "}
                    {psnlsts}
                  </text>{" "}
                  /{" "}
                  <text
                    style={{
                      color: "rgb(9, 207, 9)",
                      fontFamily: "poppins",
                    }}
                  >
                    {personalworklist.length}
                  </text>
                </text>
              </div>
              <button className="AddWrksBtn"  onClick={() => {
              var container = document.querySelector(".inputContainer");
              container.style.top = "0px";
            }}>Add Works +</button>
            </div>
            <div className="todoList">
            <form
          onSubmit={(e) => {
            submitting(e);
          }}
        >
          <div className="inputContainer">
            <div className="exitDiv">
              <div
                className="exit"
                onClick={() => {
                  var container = document.querySelector(".inputContainer");
                  container.style.top = "-200px";
                }}
              >
                <div className="ediv_1"></div>
                <div className="ediv_2"></div>
              </div>
            </div>
            <div className="input-wrapper">
            <label>Enter your work</label>
              <div>
              <div
                className="inputDiv"
                onFocus={() => {
                  var inputDiv = document.querySelector(".inputDiv");
                  // inputDiv.style.boxShadow="0 0 8px rgb(200, 200, 200)"
                  inputDiv.style.border="1px solid rgb(108, 108, 255)"
                }}
                onBlur={() => {
                  var inputDiv = document.querySelector(".inputDiv");
                  inputDiv.style.boxShadow = "none";
                  inputDiv.style.border="1px solid white"
                }}
              >
                <i class="fa fa-tasks fa-lg"></i>
               
                <input
                  name="test"
                  className="d-input"
                  type="text"
                />
                
              </div>
              <button className="Add-Button"><h3>Add +</h3></button>
              </div>
            </div>
          </div>
        </form>
              {personalworklist.map((work) => (
                <div
                  className="eachWork"
                  style={{ borderLeft: `5px solid ${randomclrfun()}` }}
                >
                  <div className="content">
                    {!work.completed ? (
                      <h4>{`${work.content[0].toUpperCase()}${work.content.slice(
                        1,
                        work.content.length
                      )}`}</h4>
                    ) : (
                      <h4>
                        <del>{`${work.content[0].toUpperCase()}${work.content.slice(
                          1,
                          work.content.length
                        )}`}</del>
                      </h4>
                    )}
                  </div>
                  <div className="accDec">
                    {work.completed ? null : (
                      <button
                        className="Mark-button"
                        onClick={(e) => {
                          personalcomplete(personalworklist.indexOf(work), e);
                        }}
                      >
                        <Fragment>Mark as done</Fragment>
                      </button>
                    )}
                    <i
                      class="fas fa-trash-alt"
                      onClick={() => {
                        personaldelete(personalworklist.indexOf(work));
                      }}
                    ></i>
                  </div>
                </div>
              ))}
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="dashSubtitle">
              <div className="subText">Professional</div>
              <div className="line"></div>
            </div>
            <div className="statusDiv">
              <div className="completed">
                <CircularProgressbar
                  styles={{
                    root: { width: "45px", height: "45px", fontSize: "100px" },
                    text: {
                      fontSize: "28px",
                      fill: "green",
                    },
                  }}
                  strokeWidth="15"
                  value={prfsnpercentage}
                  text={`${prfsnpercentage}%`}
                  className="progress"
                />
                {/* {Professionalworklist.map((work) => {
                  {
                    work.completed === true && prsts++
                    {console.log("prsts")}
                    {console.log(psnlpercentage,prfsnpercentage)}
                  }
                })} */}
                <text>
                  completed:
                  <text style={{ color: "red", fontFamily: "sans seif" }}>
                    {" "}
                    {prfsnsts}
                  </text>{" "}
                  /{" "}
                  <text
                    style={{
                      color: "rgb(9, 207, 9)",
                      fontFamily: "sans serif",
                    }}
                  >
                    {Professionalworklist.length}
                  </text>
                </text>
              </div>
              <button className="AddWrksBtn">Add Works +</button>
            </div>
            <div className="todoList">
              {Professionalworklist.map((work) => (
                <div
                  className="eachWork"
                  style={{ borderLeft: `10px solid ${randomclrfun()}` }}
                >
                  <div className="content">
                    {!work.completed ? (
                      <Fragment>{`${work.content[0].toUpperCase()}${work.content.slice(
                        1,
                        work.content.length
                      )}`}</Fragment>
                    ) : (
                      <Fragment>
                        <del>{`${work.content[0].toUpperCase()}${work.content.slice(
                          1,
                          work.content.length
                        )}`}</del>
                      </Fragment>
                    )}
                  </div>
                  <div className="accDec">
                    {work.completed ? null : (
                      <button
                        className="Mark-button"
                        onClick={(e) => {
                          completeprofessional(
                            Professionalworklist.indexOf(work),
                            e
                          );
                        }}
                      >
                        <Fragment>Mark as done</Fragment>
                      </button>
                    )}
                    <i
                      class="fas fa-trash-alt"
                      onClick={() => {
                        prfsdelete(Professionalworklist.indexOf(work));
                      }}
                    ></i>
                  </div>
                </div>
              ))}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth,
  personal: state.Dasbd,
});

export default connect(mapStateToProps)(Dashboard);
