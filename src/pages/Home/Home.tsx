import React from "react";

import css from "./Home.module.css";
import WelcomeText from "../../components/WelcomeText/WelcomeText";
import CurrentDate from "../../components/CurrentDate/CurrentDate";
import SectionName from "../../components/SectionName/SectionName";
import TableAction from "../../components/TableAction/TableAction";
import Table from "../../components/Table/Table";
import Pagination from "../../components/Pagination/Pagination";

function Home() {
  return (
    <div className={css.container}>
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

export default Home;
