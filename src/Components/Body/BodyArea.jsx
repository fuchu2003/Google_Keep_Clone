import React, { useState } from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useSelector } from "react-redux";
import Snack from "./Snack";

const BodyArea = () => {
  const cardView = useSelector((state) => state.listView);
  const [takeNote, showNote] = useState(false);
  const [editTgl, setTgl] = useState(true);
  const [noteData, setNoteData] = useState({ title: "", note: "" });
  const [allNote, setAllNote] = useState([]);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState([]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const input = (e) => {
    const { name, value } = e.target;
    setNoteData((old) => {
      return { ...old, [name]: value };
    });
  };
  const close = () => {
    showNote(false);
    if (noteData.title !== "" && noteData.note !== "") {
      setAllNote((old) => [noteData, ...old]);
      setMsg(["Note Added Successfully", "success"]);
    } else {
      setMsg(["Cann't Added Empty Fields", "error"]);
    }
    setOpen(true);
    setNoteData({ title: "", note: "" });
  };
  const maindel = (id) => {
    setAllNote((old) => old.filter((e, index) => index !== id));
    setMsg(["Note Deleted Successfully", "success"]);
    setOpen(true);
  };
  const show = (id) => {
    let newData = allNote.find((e, index) => index === id);
    newData.id = id;
    showNote(true);
    setTgl(false);
    setNoteData(newData);
  };

  const edit = () => {
    setTgl(true);
    showNote(false);
    allNote.map((e, index) => {
      if (noteData.id === index) {
        if (noteData.title !== "" && noteData.note !== "") {
          allNote[index].title = noteData.title;
          allNote[index].note = noteData.note;
          setMsg(["Note Edited Successfully", "success"]);
        }
      }
      return null;
    });
    setOpen(true);
    delete noteData.id;
    setNoteData({ title: "", note: "" });
  };

  return (
    <>
      <div id="noteArea">
        <div id="inputArea">
          {takeNote ? (
            <input
              className="inputs"
              type="text"
              placeholder={"Title"}
              name="title"
              value={noteData.title}
              onChange={input}
            />
          ) : null}
          <textarea
            className="inputs"
            placeholder="Take a note ..."
            name="note"
            onClick={() => showNote(true)}
            value={noteData.note}
            onChange={input}
          ></textarea>
          {takeNote ? (
            <Tooltip title="Close">
              {editTgl ? (
                <Button size="medium" id="closeBTn" onClick={close}>
                  Close
                </Button>
              ) : (
                <Button size="medium" id="closeBTn" onClick={edit}>
                  Save
                </Button>
              )}
            </Tooltip>
          ) : null}
        </div>
        <div id="noteShowArea" className={!cardView ? "noteShowArea" : null}>
          {allNote.map((val, index) => {
            return (
              <>
                <div
                  className="notes-boxes"
                  style={cardView ? { alignSelf: "flex-start" } : null}
                >
                  <h3>{val.title}</h3>
                  <p>{val.note}</p>
                  <div className="icons">
                    <Tooltip title="Edit">
                      <div className="icn-btn" onClick={() => show(index)}>
                        <EditIcon className="btns" />
                      </div>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <div className="icn-btn" onClick={() => maindel(index)}>
                        <DeleteRoundedIcon className="btns" />
                      </div>
                    </Tooltip>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <Snack masg={msg} opn={open} cls={handleClose} />
      </div>
    </>
  );
};

export default BodyArea;
