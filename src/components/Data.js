// response coming from api
const data = {
  staffMaster: [
    {
      title: "folder1",
      screens: ["screen1", "screen2"]
    },
    {
      title: "folder2",
      screens: ["screen2", "screen3"]
    },
    {
      title: "folder3",
      screens: ["screen4", "screen5"]
    },
    {
      title: "folder4",
      screens: ["screen6", "screen7"]
    },
    "screen8",
    "screen9",
    "screen10"
  ]
};

// @standards
// menu => foleder => {}
// form => file => string

export default {
  TICKETING_MAIN_MENU: {
    TICKETING_PROCESS_MENU: [
      "Airlines_Ticket_Sales",
      "Airline_Cutfar",
      "Ticketing_Black_List",
      "Customer_Cut_Fair"
    ],

    TICKETING_QUERY_MENU: [
      "Test_Query_Menu1",
      "Test_Query_Menu2",
      "Test_Query_Menu3",
      "Test_Query_Menu4"
    ]
  }
};
