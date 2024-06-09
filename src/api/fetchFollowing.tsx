import { User } from "@/pages"

interface Following {
    following: {
        users: [User]
    }
}

export const fetchFollowing = async (jwt: string, userId: number) => {
    try {
        const headers = new Headers({
            'Authorization': `Bearer ${jwt}`,
        });

        const response = await fetch(`https://www.duolingo.com/2017-06-30/friends/users/${userId}/following`, {
            method: 'GET',
            headers: headers,
        });

        const data: Following = await response.json();
        return data.following.users
    } catch (error) {
        console.error('Error fetching following:', error);
    }
};