import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommonTable from "../../component/table/CommonTable";
import CommonTableColumn from "../../component/table/CommonTableColumn";
import CommonTableRow from "../../component/table/CommonTableRow";
import { postList } from "../../Data";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
const PostList = (props) => {
  const [dataList, setDataList] = useState([]);
  const [inputs, setInputs] = useState({
    no: 1,
    title: "",
    createDate: "2023-11-20",
    readCount: 6,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [input, setInput] = useState({
    name: "",
    title: "",
    desc: "",
    createDate: "2023-11-20",
    readCount: 6,
  });
  useEffect(() => {
    setDataList(postList);
  }, []);

  const handleChange = (event) => {
    const number = dataList.length + 1;
    setInput((values) => ({
      ...values,
      no: number,
      name: event.target.value,
      title: event.target.value,
      desc: event.target.value,
    }));
    console.log(input);
    dataList.push(input);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    gap: 5,
    display: "flex",
    flexDirection: "col",
    p: 2,
  };
  return (
    <>
      <CommonTable headersName={["글번호", "제목", "등록일", "조회수"]}>
        {dataList
          ? dataList.map((item, index) => {
              return (
                <CommonTableRow key={index}>
                  <CommonTableColumn>{item.no}</CommonTableColumn>
                  <CommonTableColumn>
                    <Link to={`/postView/${item.no}`}>{item.title}</Link>
                  </CommonTableColumn>
                  <CommonTableColumn>{item.createDate}</CommonTableColumn>
                  <CommonTableColumn>{item.readCount}</CommonTableColumn>
                </CommonTableRow>
              );
            })
          : ""}
      </CommonTable>

      <div>
        <Button
          style={{ backgroundColor: "silver", color: "black" }}
          onClick={handleOpen}
        >
          Add user
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Box sx={{ display: "flex", gap: "89.5px" }}>
                Enter your title:
                <input type="text" name="title" onChange={handleChange} />
              </Box>
              <Box sx={{ display: "flex", gap: 10 }}>
                Enter your name:
                <input type="text" name="name" onChange={handleChange} />
              </Box>
              <Box sx={{ display: "flex", gap: "43.5px" }}>
                Enter your description:
                <textarea type="text" name="desc" onChange={handleChange} />
              </Box>
              <Box sx={{ display: "flex", gap: "75px" }}>
                Enter your image:
                <input type="file" name="image" onChange={handleChange} />
              </Box>
              <input
                onClick={handleSubmit}
                type="submit"
                width="400px"
                sx={{ bgcolor: "blue" }}
              />
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default PostList;
