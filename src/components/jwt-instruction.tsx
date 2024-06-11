export const JWTInstruction = () => {
    return (
        <div
            className="bg-primary text-foreground-secondary text-sm rounded-lg ring-2 ring-tertiary w-full mb-3 flex flex-col items-start"
        >
            <p className="px-6 py-3">
                You can’t access your friends without logging in.
                Sadly only known way to access your data is through JTW Token.
                To get yours, log in and paste command below to console on duolingo.com
            </p>

            <p className="bg-secondary px-6 py-3 rounded-b-lg w-full border-t-2 border-tertiary">
                document.cookie.match(new RegExp('(^| )jwt_token=([^;]+)'))[0].slice(11)
            </p>
        </div>
    );
};
