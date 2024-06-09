interface UserID {
    users: [{ id: number }]
}

export const getUserId = async (username: string) => {
    try {
        const response = await fetch(`https://www.duolingo.com/2017-06-30/users?username=${username}`, { method: 'GET' });
        const data: UserID = await response.json();
        return data.users[0].id;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
};