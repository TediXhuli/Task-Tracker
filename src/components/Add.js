import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [compliance, setCompliance] = useState("");
  const [readCompliance, setReadCompliance] = useState(false);

  

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder, description,price,compliance,readCompliance });

    setText("");
    setDay("");
    setReminder(false);
    setDescription("");
    setPrice(null);
    setCompliance("");
    setReadCompliance(false)
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <div className="form-control">
        <label>Description</label>
        <textarea
          rows="5"
          type="text"
          placeholder="Add Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Price</label>
        <input
          type="number"
          placeholder="Add Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Compliance</label>
        <input
          type="text"
          placeholder="Add Compliance"
          value={compliance}
          onChange={(e) => setCompliance(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Read Compliance</label>
        <input
          type="checkbox"
          placeholder="Add Task"
          value={readCompliance}
          onChange={(e) => setReadCompliance(e.target.value)
          }
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
