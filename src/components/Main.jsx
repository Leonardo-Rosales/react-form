import Card from './Card/Card'
import initialPosts from '../Posts'
import Tags from './Tags/Tags'
import { useState } from 'react'

export default function Main() {

    const [posts, setPosts] = useState(initialPosts)
    const [title, setTitle] = useState('')

    function addPost(event) {
        event.preventDefault()

        const newTitle = title.trim()
        if (!newTitle) return

        const newPost = {
            id: Date.now(),
            title: newTitle,
            image: undefined,
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
            tags: ['html', 'css'],
            published: true,
        }

        setPosts([...posts, newPost])
        setTitle('')
    }


    const initialPostId = initialPosts.map(post => post.id)
    const newTitles = posts.filter(post => !initialPostId.includes(post.id))
    // console.log(initialPostIds)


    const published = posts.filter(post => post.published === true)

    const tags = []
    posts.forEach(post => {
        post.tags.forEach((tag) => {
            if (!tags.includes(tag)) {
                tags.push(tag)
            }
        })
    })

    return (
        <main>
            <section className="container">
                <Tags tags={tags} />
                <div className="row">
                    <div className="col-3">
                        <form onSubmit={addPost}>
                            <input
                                type="text"
                                onChange={(event) => setTitle(event.target.value)}
                                placeholder="Inserisci titolo"
                                value={title}
                            />
                            <input type="submit" value="Add" />
                        </form>

                        <ul>
                            {newTitles.map((post) => (
                                <li key={post.id}>{post.title}</li>
                            ))}
                        </ul>
                    </div>
                    {published.map((post) => (
                        <div key={post.id} className="col-3">
                            <Card post={post} />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}