import { Rowdies } from "next/font/google";
const rowdies = Rowdies({ subsets: ["latin"], weight: ["300"] });
import { useState } from "react";

import { TextField } from "@/components/textfield";
import { fetchFollowers } from "@/api/fetchFollowers";
import { fetchFollowing } from "@/api/fetchFollowing";
import { getUserId } from "@/api/getUserId";

export interface User {
    displayName: string;
    totalXp: number;
    picture: string;
    username: string;
}

export default function Home() {
    const [username, setUsername] = useState('');
    const [jwt, setJwt] = useState('');

    const [followers, setFollowers] = useState<User[]>([]);
    const [following, setFollowing] = useState<User[]>([]);
    const [mutualFollowers, setMutualFollowers] = useState<User[]>([]);
    const [mutualFollowing, setMutualFollowing] = useState<User[]>([]);

    async function handleSubmit(event: any) {
        event.preventDefault()
        const userId = await getUserId(username)
        if (userId) {
            const fetchedFollowers = await fetchFollowers(jwt, userId)
            if (fetchedFollowers != null) { setFollowers(fetchedFollowers) }
            const fetchedFollowing = await fetchFollowing(jwt, userId)
            if (fetchedFollowing != null) { setFollowing(fetchedFollowing) }
        }

        const followingUsernames: string[] = following.map(following => following.username)
        const followerUsernames: string[] = followers.map(follower => follower.username)

        const mutualFollowingUsernames: string[] = followingUsernames.filter(
            followingUsername => !followerUsernames.includes(followingUsername)
        );
        const mutualFollowerUsernames: string[] = followerUsernames.filter(
            followerUsername => !followingUsernames.includes(followerUsername)
        );

        setMutualFollowers(followers.filter(follower => mutualFollowerUsernames.includes(follower.username)))
        setMutualFollowing(following.filter(following => mutualFollowingUsernames.includes(following.username)))
    }

    return (
        <main
            className={`bg-bg-primary flex min-h-screen flex-col items-center justify-between p-24 ${rowdies.className}`}>
            <p>It's easier to be motivated in duolingo when you have mutuals</p>

            <form onSubmit={handleSubmit}>
                <TextField id="username" placeholder="username" value={username}
                           onChange={(e) => setUsername(e.target.value)}/>
                <TextField id="jwt" placeholder="jwt" value={jwt} onChange={(e) => setJwt(e.target.value)}/>
                <button type="submit">Search</button>
            </form>

            <h1> You follow, they dont follow back: </h1>
            <div>
                {mutualFollowing.map((following) => (
                    <div key={`${following.username}`}>
                        <p>name: {following.displayName}</p>
                        <p>xp: {following.totalXp}</p>
                        <hr/>
                    </div>
                ))}
            </div>

            <h1> They follow, you dont follow back: </h1>
            <div>
                {mutualFollowers.map((follower) => (
                    <div key={`${follower.username}`}>
                        <p>name: {follower.displayName}</p>
                        <p>xp: {follower.totalXp}</p>
                        <hr/>
                    </div>
                ))}
            </div>

            <p>to get jwt: document.cookie.match(new RegExp('(^| )jwt_token=([^;]+)'))[0].slice(11)</p>
        </main>
    );
}