import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'gabooyturrino',
        name: 'Gabriel Yturrino',
        isFollowing: false
    },
    {
        userName: 'pheralb',
        name: 'Pablo Heralde',
        isFollowing: true
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollowing: false
    },
]
export function App() {

    return (
        <section className="App">

            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        isFollowing>
                        {name}
                    </TwitterFollowCard>
                )
                )
            }

        </section>
    )
}