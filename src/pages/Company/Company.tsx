import React from "react";

import css from "./Company.module.css";
import WelcomeText from "../../components/WelcomeText";
import CurrentDate from "../../components/CurrentDate";
import SectionName from "../../components/SectionName";
import TableAction from "../../components/TableAction";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";

function Company() {
  return (
    <div className={css.wrapper}>
      <div className={css.wrapper1}>
        <WelcomeText />
        <CurrentDate />
      </div>
      <div className={css.wrapper2}>
        <SectionName name="Companies" quantity={20} />
        <TableAction />
      </div>
      <div className={css.wrapper3}>
        <Table />
      </div>
      <div className={css.wrapper4}>
        <Pagination />
      </div>
    </div>
  );
}

export default Company;
