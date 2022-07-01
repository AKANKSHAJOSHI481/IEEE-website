import React, { useState } from "react";
import { Collapse, ListGroup, Button } from "react-bootstrap";
import Style from "../Styles/program.module.css";
export default function Program({data}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
      className={"d-flex my-4 h4 text-center p-4 " + Style.tableHeader}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {data.professor}

      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <ListGroup as="ul">
            {data.topics.map((item)=>{
              return <ListGroup.Item as="li" className={Style.listItem}>
              {item}
            </ListGroup.Item>
            })}
            
            
          </ListGroup>
        </div>
      </Collapse>
    </div>
  );
}
