import { useDispatch } from "react-redux";
import { addHabit } from "../redux/features/habitSlice";

const Navbar = ({ name }) => {
  // call use dispatch hook a variable call dispatch
  const dispatch = useDispatch();


  // function for add habit 
  const handleSave = () => {
    const habitName = document.getElementById("habitName").value;
    dispatch(addHabit(habitName));
    alert("Your habit added successfully");
    document.getElementById("habitName").value = "";
  }

  return (
    <>
      <div className="navbar">
        <h3>HABIT TRACKER</h3>
        <div className="right-nav">
          <h5>{name}</h5>
          <button
            className="addhabit-btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-plus"></i> Add Habits
          </button>
        </div>
      </div>

      {/* modal for add habit form */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add New Habit
              </h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  HABIT TITLE
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="habitName"
                  placeholder="Enter habit"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-danger"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-outline-success" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
