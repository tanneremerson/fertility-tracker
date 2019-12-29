import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TopNavBar from "./components/TopNavBar";
import Graph from "./components/Graph";
import Counters from "./components/Counters";
import Data from "./components/Data";
import { update } from "./actions";

function InputFields() {
  return (
    <div className="row bg-light text-center form-group4">
      <div className="col-sm-2">
        <div className="bg-white rounded-lg p-2">
          <h6>Temperature</h6>
          <select className="custom-select col-sm-6" id="inputTemp0">
            <option value={96}>96</option>
            <option value={97}>97</option>
            <option value={98}>98</option>
            <option value={99}>99</option>
          </select>
          <select className="custom-select col-sm-6" id="inputTemp1">
            <option value={0.0}>.0</option>
            <option value={0.1}>.1</option>
            <option value={0.2}>.2</option>
            <option value={0.3}>.3</option>
            <option value={0.4}>.4</option>
            <option value={0.5}>.5</option>
            <option value={0.6}>.6</option>
            <option value={0.7}>.7</option>
            <option value={0.8}>.8</option>
            <option value={0.9}>.9</option>
          </select>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="bg-white rounded-lg p-2">
          <h6>Fluid</h6>
          <select className="custom-select" id="inputFluid">
            <option value="BLOOD">Blood</option>
            <option value="NONE">None</option>
            <option value="STICKY">Sticky</option>
            <option value="CREAMY">Creamy</option>
            <option value="EGG_WHITE">Egg White</option>
            <option value="WATERY">Watery</option>
          </select>
        </div>
      </div>
      <div className="col-sm-1">
        <div className="bg-white rounded-lg p-2">
          <h6>Peak Day</h6>
          <input type="checkbox" id="inputPeakDay" />
        </div>
      </div>
      <div className="col-sm-1">
        <div className="bg-white rounded-lg p-2">
          <h6>Sex</h6>
          <input type="checkbox" id="inputSex" />
        </div>
      </div>
      <div className="col-sm-2">
        <div className="bg-white rounded-lg p-2">
          <h6>Cervix Height</h6>
          <select className="custom-select" id="inputHeight">
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="bg-white rounded-lg p-2">
          <h6>Cervix Opening</h6>
          <select className="custom-select" id="inputOpening">
            <option value="OPEN">Open</option>
            <option value="CLOPEN">Medium</option>
            <option value="CLOSED">Closed</option>
          </select>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="bg-white rounded-lg p-2">
          <h6>Cervix Firmness</h6>
          <select className="custom-select" id="inputFirmness">
            <option value="SOFT">Soft</option>
            <option value="MEDIUM">Medium</option>
            <option value="HARD">Hard</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function App() {
  const data = useSelector(state => state.data);
  const currentCycle = useSelector(state => state.currentCycle);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <TopNavBar />
      </div>
      <br />
      <div className="container-fluid">
        <InputFields className="row" />
      </div>
      <br />
      <div className="container-fluid">
        <div className="col-sm-12">
          <button type="button" class="btn btn-primary btn-lg btn-block">
            Submit
          </button>
        </div>
      </div>
      <br />
      <div className="container-fluid">
        <div className="row bg-light">
          <div className="col-sm-12">
            <div className="bg-white rounded-lg">
              <Graph data={data} currentCycle={currentCycle} />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="bg-white rounded-lg">
              <Data
                data={data}
                currentCycle={currentCycle}
                onUpdate={(id, temp) =>
                  dispatch(update(id, temp, currentCycle))
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
