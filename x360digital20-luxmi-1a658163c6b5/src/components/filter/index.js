import styles from "./style.module.scss";
import SelectDropdown from "../selectDropdown";
import Button from "../button";
import { HighSchoolAvgOptions, programOptions } from "../../data/utils";
const Filter = () => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterOne}>
        <h4>HIGH SCHOOL AVERAGE</h4>
        <SelectDropdown
          selectOptions={HighSchoolAvgOptions}
          placeholder="Average"
          padding="1rem"
          dropDownTop="5rem"
        />
      </div>
      <div className={styles.filterTwo}>
        <h4>PROGRAM</h4>
        <SelectDropdown
          selectOptions={programOptions}
          placeholder="Search"
          padding="1rem"
          dropDownTop="5rem"
          menuWidth="49rem"
          menuLeft="-14.2rem"
        />
      </div>
      <div className={styles.filterThree}>
        <h4>APPLICATION BUDGET</h4>
        <SelectDropdown
          selectOptions={programOptions}
          placeholder="Search"
          padding="1rem"
          dropDownTop="5rem"
          menuWidth="49rem"
          menuLeft="-14.2rem"
        />
      </div>
      <div className={styles.filterBtn}>
        <Button label="Generate list" padding="1rem 0" maxWidth="19.3rem" margin="0 52rem 0"/>
      </div>
    </div>
  );
};

export default Filter;
