import { User } from "@/pages"

interface Followers {
    followers: {
        users: [User]
    }
}

export const fetchFollowers = async (jwt: string, userId: number) => {
    try {
        const headers = new Headers({
            'Authorization': `Bearer ${jwt}`,
        });

        const response = await fetch(`https://www.duolingo.com/2017-06-30/friends/users/${userId}/followers`, {
            method: 'GET',
            headers: headers,
        });

        const data: Followers = await response.json();
        return data.followers.users
    } catch (error) {
        console.error('Error fetching followers:', error);
    }
};