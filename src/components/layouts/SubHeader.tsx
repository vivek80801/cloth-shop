import React from "react";

interface Props {
  title: string;
}

const SubHeader: React.FC<Props> = (props): JSX.Element => {
  return (
    <section className="header_text sub">
      <img
        className="pageBanner"
        src="../themes/images/pageBanner.png"
        alt="New products"
      />
      <h4>
        <span>{props.title}</span>
      </h4>
    </section>
  );
};

export default SubHeader;
