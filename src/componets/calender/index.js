import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Calender = ({ calendarId }) => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [rowData, setRowData] = useState([])
  const [colDefs, setColDefs] = useState([
    { field: 'event' },
    { field: 'eventTime' },
    { field: 'timeZone' }
  ])
  useEffect(() => {
    const fetchEvents = async () => {

      try {
        const response = await axios.get(
          `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
          {
            params: {
              key: 'AIzaSyCPeQB3rkP6f7er4txaXJ4ZlbjO8nNSM8c',  // Replace with your API key
              maxResults: 10,       // Number of events to retrieve
              orderBy: 'startTime',
              singleEvents: true,
              timeMin: new Date().toISOString(),  // Start time (current date and time)
            },
          }
        );
        // console.log(response.data)
        setEvents(response.data.items);

        settingRowData();

      } catch (err) {
        setError(err.message);
      }
    };
    fetchEvents();
  }, [calendarId])

  console.log(rowData, 'rowData')



  const settingRowData = async () => {
    await setRowData(events && events.map(item => {
      return (
        {
          'event': item.summary,
          'eventTime': moment(item.start.dateTime).calendar(),
          'timeZone': item.start.timeZone
        }
      )
    }))
  }



  return (
    <div>
      <div className="ag-theme-quartz" style={{ height: '300px', width: '50%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
        />
      </div>
    </div>
  );
};

export default Calender;
