import { useRouter } from "next/router";
import styles from '../../styles/Blogpost.module.css';

const Slug =()=>{
    const router = useRouter();
    const {slug} = router.query;
    return<div className={styles.container}>
        <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit tempore perspiciatis quidem harum odit dolores, ab saepe maiores ad. Ut officia velit commodi perferendis iste ea quia reprehenderit, reiciendis molestiae.
        </div>
        </main>
    </div>
}

export default Slug;