import style from './Card.module.css'
import Button from '../Button/Button'
import placeHolder from '../../assets/placeholder.png'
import Tags from '../Tags/Tags'

export default function Card({ post }) {

    const { title, image, content, tags } = post

    return (
        < div className={style.card} >
            <img className={style.image} src={image || placeHolder} alt="" />
            <div className={style.card_body}>
                <h3 className={style.card_title}>{title}</h3>
                <Tags tags={tags} />
                <p className={style.card_description}>{content}</p>
                <Button />
            </div>
        </div >
    )

}