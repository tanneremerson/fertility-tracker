// TODO: Is this where we want to load the data???

const data = {
  cycles: [
    [
      {
        id: 1,
        date: "20191016",
        temp: 97.4,
        fluid: "BLOOD",
        cervix: "CLOSED"
      },
      {
        id: 2,
        date: "20191017",
        temp: 97.4,
        fluid: "BLOOD",
        cervix: "CLOSED"
      },
      {
        id: 3,
        date: "20191018",
        temp: 97.5,
        fluid: "BLOOD",
        cervix: "CLOSED"
      },
      {
        id: 4,
        date: "20191019",
        temp: 97.5,
        fluid: "BLOOD",
        cervix: "CLOSED"
      },
      {
        id: 5,
        date: "20191020",
        temp: 97.6,
        fluid: "BLOOD",
        cervix: "CLOSED"
      },
      {
        id: 6,
        date: "20191021",
        temp: 97.6,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        id: 7,
        date: "20191022",
        temp: 97.5,
        fluid: "NONE",
        cervix: "CLOPEN"
      },
      {
        id: 8,
        date: "20191023",
        temp: 97.5,
        fluid: "STICKY",
        cervix: "CLOPEN"
      },
      {
        id: 9,
        date: "20191024",
        temp: 97.6,
        fluid: "CREAMY",
        cervix: "CLOPEN"
      },
      {
        id: 10,
        date: "20191025",
        temp: 97.3,
        fluid: "CREAMY",
        cervix: "OPEN"
      },
      {
        id: 11,
        date: "20191026",
        temp: 97.4,
        fluid: "EGG_WHITE",
        cervix: "OPEN"
      },
      {
        id: 12,
        date: "20191027",
        temp: 97.5,
        fluid: "EGG_WHITE",
        cervix: "OPEN"
      },
      {
        id: 13,
        date: "20191028",
        temp: 98.1,
        fluid: "STICKY",
        cervix: "CLOSED"
      },
      {
        id: 14,
        date: "20191029",
        temp: 98,
        fluid: "STICKY",
        cervix: "CLOSED"
      },
      {
        id: 15,
        date: "20191030",
        temp: 98,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        id: 16,
        date: "20191031",
        temp: 98.1,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        id: 17,
        date: "20191101",
        temp: 98.5,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        id: 18,
        date: "20191102",
        temp: 98.3,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        id: 19,
        date: "20191103",
        temp: 98,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        id: 20,
        date: "20191104",
        temp: 98.3,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        id: 21,
        date: "20191105",
        temp: 98.5,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        id: 22,
        date: "20191106",
        temp: 98,
        fluid: "NONE",
        cervix: "CLOSED"
      }
    ]
  ]
};

const dataReducer = (state = data, action) => {
  switch (action.type) {
    case "UPDATE":
      console.log("UPDATING");
      const newState = {
        ...state
      };
      newState.cycles[action.currentCycle - 1][action.id - 1].temp =
        action.temp;
      return newState;
    default:
      return state;
  }
};

export default dataReducer;
