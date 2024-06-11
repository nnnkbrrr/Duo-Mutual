import { Rowdies } from "next/font/google";
const rowdies = Rowdies({ subsets: ["latin"], weight: ["300"] });
import React, { useState } from "react";

import { TextField } from "@/components/textfield";
import { fetchFollowers } from "@/api/fetchFollowers";
import { fetchFollowing } from "@/api/fetchFollowing";
import { getUserId } from "@/api/getUserId";
import {SearchButton} from "@/components/search-button";
import {JWTInstruction} from "@/components/jwt-instruction";

export interface User {
    displayName: string;
    totalXp: number;
    picture: string;
    username: string;
}

export default function Home() {
    const [username, setUsername] = useState('');
    const [jwt, setJwt] = useState('');
    const [jwtInfo, setJwtInfo] = useState(Boolean);

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

    function setJWTInstructionVisibility() {
        setJwtInfo(!jwtInfo)
        console.log(jwtInfo)
    }

    return (
        <main className={`bg-bg-primary flex min-h-screen max-w-3xl flex-col items-center mx-auto justify-evenly p-24 ${rowdies.className}`}>
            <div>
                <p className="text-center uppercase text-5xl mb-5">
                    Duo Mutual
                </p>
                <p className="text-center uppercase text-2xl">
                    It's easier to be motivated on
                    <span className="text-duolingo">
                    <a href="https://duolingo.com" target="_blank"> Duolingo
                    </a>
                </span>
                    <br/>
                    when you have mutuals
                </p>
            </div>

            <form className="w-full" onSubmit={handleSubmit}>
                <TextField id="username" placeholder="Username" value={username}
                           onChange={(e) => setUsername(e.target.value)}/>

                <TextField id="jwt" placeholder="JWT Token" value={jwt} onChange={(e) => setJwt(e.target.value)}
                           trailingContent={
                               <button type="button" className="mx-3 size-5" onClick={setJWTInstructionVisibility}>
                                   <img src="questionmark.circle.fill.svg"/>
                               </button>
                           }/>
                {(jwtInfo) ? (
                    <JWTInstruction />
                ) : (
                    <div className="mb-5"/>
                )}

                <SearchButton label="Search"/>
            </form>

            <p className="text-foreground-secondary text-xs">is not sponsored endorsed or administered by Duolingo</p>

            {/*<h1> You follow, they dont follow back: </h1>*/}
            {/*<div>*/}
            {/*    {mutualFollowing.map((following) => (*/}
            {/*        <div key={`${following.username}`}>*/}
            {/*            <p>name: {following.displayName}</p>*/}
            {/*            <p>xp: {following.totalXp}</p>*/}
            {/*            <hr/>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}

            {/*<h1> They follow, you dont follow back: </h1>*/}
            {/*<div>*/}
            {/*    {mutualFollowers.map((follower) => (*/}
            {/*        <div key={`${follower.username}`}>*/}
            {/*            <p>name: {follower.displayName}</p>*/}
            {/*            <p>xp: {follower.totalXp}</p>*/}
            {/*            <hr/>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </main>
    );
}