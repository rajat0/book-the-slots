import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Calender = ({ calendarId }) => {
  const [error, setError] = useState(null);
  const [rowData, setRowData] = useState([])
  const [colDefs, setColDefs] = useState([
    { field: 'event' },
    { field: 'eventTime' },
    { field: 'timeZone' }
  ])


  const fetchEvents = useCallback(async (e) => {
    e.preventDefault();
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
      setRowData(response.data.items.map(item => {
        return (
          {
            'event': item.summary,
            'eventTime': moment(item.start.dateTime).calendar(),
            'timeZone': item.start.timeZone
          }

        )
      }))
    } catch (err) {
      setError(err.message);
    }

  }, [calendarId])


  return (
    <div className="">
      <div className="flex-row  p-4">
        <div className=" flex justify-center bg-gray-300 items-center p-2 rounded-md">
          <div onClick={fetchEvents} className="border-2-solid-black rounded-md bac" >Click To Fetch Data</div>
        </div>

        {
          rowData.length > 0 &&
          <div className="flex justify-center bg-gray-300 items-center p-4 mt-2 rounded-md">
            <div className="ag-theme-quartz" style={{ height: '300px', width: '50%' }}>
              <AgGridReact
                rowData={rowData.length && rowData}
                columnDefs={colDefs}

              />
            </div>
          </div>
        }

      </div>
    </div>
  );
};

export default Calender;
