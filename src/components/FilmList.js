
import FilmItem from './FilmItem';
import styles from './FilmList.module.css';


function FilmList(props) {
    return (
        <div>
            <ul className={styles.list}>
                {props.listOfFilms.map((f) => {
                    return <FilmItem oneFilm={f}></FilmItem>
                })}
            </ul>

        </div>
    )
}

export default FilmList;