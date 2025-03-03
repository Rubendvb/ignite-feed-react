import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/71610449?v=4"
            alt=""
          />

          <div className={styles.authorInfo}>
            <strong>Rubén Vásquez</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="03 de março às 08:13h" dateTime="2024-03-02 08:13:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea name="" id="" placeholder="Deixe seu comentário"></textarea>

        <footer>
          <button type="submit">Publicar </button>
        </footer>
      </form>
    </article>
  )
}
