// Components
import Table from "../home/components/table/Table";
import Authors from "./components/authors/Authors";

// Styles
import Style from "./TablesView.module.css";

const TablesView: React.FC = () => {
  return (
    <div className={Style.tablesView}>
      <section>
        <Authors />
      </section>
      <section>
        <Table />
      </section>
    </div>
  );
};
export default TablesView;
