import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";

export async function getServerSideProps(context) {
  const { query } = context;
  const page = parseInt(query.page) || 1;
  const cat = query.cat || null;

  return {
    props: {
      page,
      cat,
    },
  };
}

const BlogPage = ({ page, cat }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
