import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../redux/features/habitSlice";
import { useNavigate } from "react-router-dom";

const Habit = ({ habit }) => {
  const today = new Date();
  const todayDay = today.getDay();
  let countDone = 0;
  //loop for getting habit done count
  for (let i = 0; i < habit.weekLog.length; i++) {
    if (habit.weekLog[i].isDone === true) {
      countDone++;
    }
  }

  // call use navigate hook from react-router-dom in a navigate varriable 
  const navigate = useNavigate();

  // call use dispatch hook a variable call dispatch
  const dispatch = useDispatch();

  // function call after click delete button on habit list
  const handleDelete = () => {
    dispatch(deleteHabit(habit.id));
    alert("your habit deleted successfully")
  }

  // this function call after click week view button
  // this function used for set current habit id to localstorage and navigate to weekview page
  const setId = () => {
    localStorage.setItem("id", habit.id)
    navigate("/week-view");
  }


  return (
    <div className="habit">
      <div className="habit-left">
        <i className="fas fa-asterisk"></i>
        <div>
          <h4 style={{ textTransform: "capitalize" }}>{habit.name}</h4>
          <p className="day-complete">{countDone}/{todayDay + 1} days</p>
        </div>
      </div>
      <div className="habit-right">
        <div className="log-btn" onClick={setId}>
          <i className="fa-solid fa-calendar-week" ></i>
          Weekly View
        </div>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default Habit;