import React from "react";
import { Button } from "@cred/neopop-web/lib/components";
import "./PaginationComponent.css";

const PaginationComponent = (props) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination_button_outer_div">
      {pages.map((page, index) => {
        return (
          <>
            <Button
              onClick={() => props.setCurrentPage(page)}
              key={index}
              variant="primary"
              kind="elevated"
              size="big"
            >
              {page}
            </Button>
          </>
        );
      })}
    </div>
  );
};

export default PaginationComponent;
