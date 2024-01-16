// Components
import Table from "../home/components/table/Table";

// Styles
import Style from "./TablesView.module.css";

const TablesView: React.FC = () => {
  return (
    <div className={Style.tablesView}>
      <section>
        <Table />
      </section>
      <section>
        <Table />
      </section>
    </div>
  );
};
export default TablesView;
