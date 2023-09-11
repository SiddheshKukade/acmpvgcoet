import styles from "./Programs.module.css";

const ProgramsList = ({ body }) => {
  return (
    <div className={styles.programsListContent}>
      {body.map((listItem) => {
        return (
          <a
            href={listItem.link}
            className={styles.programsBoxLink}
            dangerouslySetInnerHTML={{ __html: listItem.title }}
          ></a>
        );
      })}
    </div>
  );
};

export default ProgramsList;
